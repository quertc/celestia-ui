import { Button } from '@mantine/core';
import useSubmitButton from '../hooks/useSubmitButton';

function SubmitButton() {
  const { submit, nodeUrl, namespaceId, data, gasLimit, fee, isSubmitLoading } = useSubmitButton();

  return (
    <Button
      disabled={!nodeUrl || !namespaceId || !data || !gasLimit || !fee}
      loading={isSubmitLoading}
      variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan' }}
      fullWidth
      onClick={submit}
    >
      Submit
    </Button>
  );
}

export default SubmitButton;
