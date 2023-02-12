import { Box, Container } from '@mantine/core';
import { useState } from 'react';
import CardTotal from '../../components/CardTotal';
import CardTransaction from '../../components/CardTransaction';
import HeaderDashboard from '../../components/HeaderDashboard';
import InputSearch from '../../components/InputSearch';
import ModalTransaction from '../../components/ModalTransaction';

const DashboardPage = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Box>
      <ModalTransaction opened={opened} setOpened={setOpened} />
      <HeaderDashboard setOpened={setOpened} />
      <Container
        size="lg"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <CardTotal type="Entradas" value="R$ 10.000,00" />
        <CardTotal type="Saidas" value="R$ 10.000,00" />
        <CardTotal type="Total" value="R$ 10.000,00" />
      </Container>
      <InputSearch />
      <CardTransaction />
    </Box>
  );
};

export default DashboardPage;
