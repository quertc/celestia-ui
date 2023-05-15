import { Paper, SimpleGrid } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { PayForBlobState } from './context/PayForBlobContext';
import Wrapper from './components/Wrapper';
import Shell from './components/Shell';
import NodeUrlInput from './components/NodeUrlInput';
import NamespaceIdInput from './components/NamespaceIdInput';
import DataInput from './components/DataInput';
import GasLimitInput from './components/GasLimitInput';
import FeeInput from './components/FeeInput';
import GenerateButton from './components/GenerateButton';
import SubmitButton from './components/SubmitButton';

function App() {
  return (
    <Wrapper>
      <Shell>
        <PayForBlobState>
          <Notifications />
          <Paper p="md" withBorder>
            <NodeUrlInput />
            <NamespaceIdInput mt="sm" />
            <DataInput mt="sm" />
            <GasLimitInput mt="sm" />
            <FeeInput mt="sm" />
            <SimpleGrid mt="xl" cols={2}>
              <GenerateButton />
              <SubmitButton />
            </SimpleGrid>
          </Paper>
        </PayForBlobState>
      </Shell>
    </Wrapper>
  );
}

export default App;
