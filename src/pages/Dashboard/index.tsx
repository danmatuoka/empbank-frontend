import { Box, Center, Container, Pagination } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import CardTotal from '../../components/CardTotal';
import CardTransaction from '../../components/CardTransaction';
import HeaderDashboard from '../../components/HeaderDashboard';
import InputSearch from '../../components/InputSearch';
import ModalTransaction from '../../components/ModalTransaction';
import { useTransactionContext } from '../../contexts/transactionContext';
import { useUserContext } from '../../contexts/userContext';

const DashboardPage = () => {
  const [opened, setOpened] = useState(false);
  const {
    transaction,
    allTransactions,
    loadTransactions,
    loadAllTransactions,
    loadPagesNext,
    totalEntries,
    totalOut,
    totalValues,
  } = useTransactionContext();
  const { token } = useUserContext();

  useEffect(() => {
    loadTransactions();
    loadAllTransactions();
  }, []);

  return token ? (
    <Box>
      <ModalTransaction opened={opened} setOpened={setOpened} />
      <HeaderDashboard setOpened={setOpened} />
      <Container
        size="lg"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <CardTotal type="Entradas" value={totalEntries(allTransactions)} />
        <CardTotal type="Saidas" value={totalOut(allTransactions)} />
        <CardTotal type="Total" value={totalValues(allTransactions)} />
      </Container>
      <InputSearch />
      <>
        {transaction?.transactions.map((elem) => {
          return (
            <CardTransaction
              key={elem.id}
              title={elem.title}
              type={elem.type}
              category={elem.category}
              created_at={elem.created_at}
              value={elem.value}
            />
          );
        })}
      </>
      <Center sx={{ marginTop: 20 }}>
        <Pagination
          onChange={(page: number) => {
            loadPagesNext(page);
          }}
          total={5}
          initialPage={1}
        />
      </Center>
    </Box>
  ) : (
    <Navigate to="/" />
  );
};

export default DashboardPage;
