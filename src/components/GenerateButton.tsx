import { Button } from '@mantine/core';
import useGenerateButton from '../hooks/useGenerateButton';

function GenerateButton() {
  const { generate } = useGenerateButton();

  return (
    <Button
      variant="default"
      fullWidth
      onClick={generate}
    >
      Generate
    </Button>
  );
}

export default GenerateButton;
