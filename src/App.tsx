import { MantineProvider, Text } from '@mantine/core';
import RoutesMain from './routes';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RoutesMain />
    </MantineProvider>
  );
}

export default App;
