import { useContext } from 'react';
import { MantineNumberSize, TextInput } from '@mantine/core';
import { PayForBlobContext } from '../context/PayForBlobContext';

interface NamespaceIdInputProps {
  mt: MantineNumberSize;
}

function NamespaceIdInput({ mt }: NamespaceIdInputProps) {
  const { namespaceId, setNamespaceId } = useContext(PayForBlobContext);

  return (
    <TextInput
      label="Namespace ID"
      withAsterisk
      value={namespaceId}
      onChange={event => setNamespaceId(event.currentTarget.value)}
      mt={mt}
      error={!namespaceId ? 'Namespace ID is required' : undefined}
    />
  );
}

export default NamespaceIdInput;
