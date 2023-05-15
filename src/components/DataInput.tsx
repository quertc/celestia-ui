import { useContext } from 'react';
import { MantineNumberSize, TextInput } from '@mantine/core';
import { PayForBlobContext } from '../context/PayForBlobContext';

interface DataInputProps {
  mt: MantineNumberSize;
}

function DataInput({ mt }: DataInputProps) {
  const { data, setData } = useContext(PayForBlobContext);

  return (
    <TextInput
      label="Data (hex-encoded message)"
      withAsterisk
      value={data}
      onChange={event => setData(event.currentTarget.value)}
      mt={mt}
      error={!data ? 'Data is required' : undefined}
    />
  );
}

export default DataInput;
