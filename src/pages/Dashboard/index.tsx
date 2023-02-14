import { Box, Center, Container, Pagination } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import CardTotal from '../../components/CardTotal';
import CardTransaction from '../../components/CardTransaction';
import EmptyCard from '../../components/EmptyCard';
import HeaderDashboard from '../../components/HeaderDashboard';
import InputSearch from '../../components/InputSearch';
import ModalTransaction from '../../components/ModalTransaction';
import { useTransactionContext } from '../../contexts/transactionContext';
import { useUserContext } from '../../contexts/userContext';

const DashboardPage = () => {
  const {
    transaction,
    allTransactions,
    loadTransactions,
    loadAllTransactions,
    loadPagesNext,
    totalEntries,
    totalOut,
    totalValues,
    opened,
    setOpened,
    filterTransaction,
  } = useTransactionContext();
  const { token } = useUserContext();
  const isMobile = useMediaQuery('(max-width: 768px)');

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
        sx={{
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center',
          marginTop: 15,
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          gap: isMobile ? 10 : 0,
          height: 100,
          overflowY: isMobile ? 'scroll' : 'hidden',
        }}
      >
        <CardTotal type="Entradas" value={totalEntries(allTransactions)} />
        <CardTotal type="Saidas" value={totalOut(allTransactions)} />
        <CardTotal type="Total" value={totalValues(allTransactions)} />
      </Container>
      <InputSearch />
      {transaction?.transactions.length == 0 && <EmptyCard />}
      <>
        {filterTransaction
          ? filterTransaction.map((elem) => (
              <CardTransaction
                key={elem.id}
                title={elem.title}
                type={elem.type}
                category={elem.category}
                created_at={elem.created_at}
                value={elem.value}
              />
            ))
          : transaction?.transactions.map((elem) => (
              <CardTransaction
                key={elem.id}
                title={elem.title}
                type={elem.type}
                category={elem.category}
                created_at={elem.created_at}
                value={elem.value}
              />
            ))}
      </>
      <Center sx={{ marginTop: 20, marginBottom: 20 }}>
        <Pagination
          onChange={(page: number) => {
            loadPagesNext(page);
          }}
          total={transaction ? Math.ceil(transaction.count / 5) : 1}
          initialPage={1}
        />
      </Center>
    </Box>
  ) : (
    <Navigate to="/" />
  );
};

export default DashboardPage;
