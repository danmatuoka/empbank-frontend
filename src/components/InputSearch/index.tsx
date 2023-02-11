import { Container, TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const InputSearch = () => {
  return (
    <Container
      size="lg"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
      }}
    >
      <TextInput width="90%" placeholder="Busque uma transação" />
      <Button leftIcon={<IconSearch />} variant="outline" color="#60CFFA">
        Buscar
      </Button>
    </Container>
  );
};

export default InputSearch;
