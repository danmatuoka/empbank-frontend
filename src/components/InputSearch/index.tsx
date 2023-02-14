import { Container, TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useTransactionContext } from '../../contexts/transactionContext';

const InputSearch = () => {
  const [eventUser, setEventUser] = useState('');
  const { search, setSearch, setFilterTransaction, allTransactions } =
    useTransactionContext();

  useEffect(() => {
    const filterTransaction = allTransactions.filter((elem) => {
      return (
        elem.title.toLowerCase().includes(search.toLowerCase()) ||
        elem.category.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilterTransaction(filterTransaction);
  }, [search]);

  return (
    <Container
      size="lg"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
      }}
    >
      <form
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <TextInput
          sx={{ width: '88%' }}
          placeholder="Busque uma transação"
          onChange={(e) => setEventUser(e.currentTarget.value)}
          value={eventUser}
        />
        <Button
          leftIcon={<IconSearch />}
          variant="outline"
          color="#60CFFA"
          onClick={(e) => {
            e.preventDefault();
            setSearch(eventUser);
            setEventUser('');
          }}
        >
          Buscar
        </Button>
      </form>
    </Container>
  );
};

export default InputSearch;
