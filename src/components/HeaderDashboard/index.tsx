import { Container, Image, Button } from '@mantine/core';
import logoempdash from '../../assets/Images/logoempdash.svg';

const HeaderDashboard = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Image src={logoempdash} alt="logo empbank" width={310} height={80} />
      <Button
        sx={{
          backgroundColor: '#60CFFA',
          fontWeight: 700,
          boxShadow: '0px 4px 10px 0px rgba(0,0,0,0.2)',
        }}
      >
        Nova transação
      </Button>
    </Container>
  );
};

export default HeaderDashboard;
