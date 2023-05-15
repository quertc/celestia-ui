import { useContext } from 'react';
import { TextInput } from '@mantine/core';
import { PayForBlobContext } from '../context/PayForBlobContext';

function NodeUrlInput() {
  const { nodeUrl, setNodeUrl } = useContext(PayForBlobContext);

  return (
    <TextInput
      label="Node IP (endpoint to submit PFBs)"
      withAsterisk
      value={nodeUrl}
      onChange={event => setNodeUrl(event.currentTarget.value)}
      error={!nodeUrl ? 'Node IP is required' : undefined}
    />
  );
}

export default NodeUrlInput;
