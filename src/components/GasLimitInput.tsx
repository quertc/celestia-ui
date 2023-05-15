import { useContext } from 'react';
import { MantineNumberSize, NumberInput } from '@mantine/core';
import { PayForBlobContext } from '../context/PayForBlobContext';

interface GasLimitInputProps {
  mt: MantineNumberSize;
}

function GasLimitInput({ mt }: GasLimitInputProps) {
  const { gasLimit, setGasLimit } = useContext(PayForBlobContext);

  return (
    <NumberInput
      value={gasLimit}
      onChange={setGasLimit}
      label="Gas limit"
      min={0}
      withAsterisk
      mt={mt}
      error={!gasLimit ? 'Gas limit is required' : undefined}
    />
  );
}

export default GasLimitInput;
