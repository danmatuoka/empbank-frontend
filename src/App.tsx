import { MantineProvider, Text } from '@mantine/core';
import UserProvider from './contexts/userContext';
import RoutesMain from './routes';
import { NotificationsProvider } from '@mantine/notifications';
import TransactionProvider from './contexts/transactionContext';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider position="top-right">
        <UserProvider>
          <TransactionProvider>
            <RoutesMain />
          </TransactionProvider>
        </UserProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;
