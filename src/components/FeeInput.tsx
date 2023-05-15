import { useContext } from 'react';
import { MantineNumberSize, NumberInput } from '@mantine/core';
import { PayForBlobContext } from '../context/PayForBlobContext';

interface FeeInputProps {
  mt: MantineNumberSize;
}

function FeeInputInput({ mt }: FeeInputProps) {
  const { fee, setFee } = useContext(PayForBlobContext);

  return (
    <NumberInput
      value={fee}
      onChange={setFee}
      label="Fee"
      min={0}
      withAsterisk
      mt={mt}
      error={!fee ? 'Fee is required' : undefined}
    />
  );
}

export default FeeInputInput;
