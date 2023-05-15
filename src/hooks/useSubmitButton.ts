import { useContext } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { notifications } from '@mantine/notifications';
import { PayForBlobContext } from '../context/PayForBlobContext';

interface Response {
  height: number,
  txhash: string,
}

function useGenerateButton() {
  const { nodeUrl, namespaceId, data, gasLimit, fee, isSubmitLoading, setIsSubmitLoading } = useContext(PayForBlobContext);

  async function submit() {
    try {
      setIsSubmitLoading(true);
      const response = await invoke<Response>('submit_pfb_transaction', {
        nodeUrl,
        namespaceId,
        data,
        gasLimit,
        fee,
      });
      setIsSubmitLoading(false);
      notifications.show({
        title: 'Success',
        message: `Transaction submitted successfully. TxHash: ${response.txhash}`,
        color: 'teal',
      });
    } catch (e) {
      setIsSubmitLoading(false);
      notifications.show({
        title: 'Error',
        message: e as string,
        color: 'red',
      });
    }
  }

  return { submit, nodeUrl, namespaceId, data, gasLimit, fee, isSubmitLoading };
}

export default useGenerateButton;
