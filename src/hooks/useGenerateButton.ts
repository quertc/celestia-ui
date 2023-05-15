import { useContext } from 'react';
import { PayForBlobContext } from '../context/PayForBlobContext';
import { generateHexStrings } from '../utils/payForBlob';

function useGenerateButton() {
  const { setNamespaceId, setData } = useContext(PayForBlobContext);

  function generate() {
    const [newNamespaceId, newData] = generateHexStrings();
    setNamespaceId(newNamespaceId);
    setData(newData);
  }

  return { generate };
}

export default useGenerateButton;
