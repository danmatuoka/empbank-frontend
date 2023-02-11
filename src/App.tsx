import { MantineProvider, Text } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Empbank</Text>
    </MantineProvider>
  );
}

export default App;
