import { Box, Container } from '@mantine/core';
import CardTotal from '../../components/CardTotal';
import HeaderDashboard from '../../components/HeaderDashboard';

const DashboardPage = () => {
  return (
    <Box>
      <HeaderDashboard />
      <Container
        size="lg"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <CardTotal type="Entradas" value="R$ 10.000,00" />
        <CardTotal type="Saidas" value="R$ 10.000,00" />
        <CardTotal type="Total" value="R$ 10.000,00" />
      </Container>
    </Box>
  );
};

export default DashboardPage;
