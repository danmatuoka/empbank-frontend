import { Container, Image, Button } from '@mantine/core';
import logoempdash from '../../assets/Images/logoempdash.svg';
import { useMediaQuery } from '@mantine/hooks';

interface HeaderProps {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderDashboard = ({ setOpened }: HeaderProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <Container
      size="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Image
        src={logoempdash}
        alt="logo empbank"
        width={isMobile ? 200 : 310}
        height={isMobile ? 50 : 80}
      />
      <Button
        size={isMobile ? 'xs' : 'md'}
        sx={{
          backgroundColor: '#60CFFA',
          fontWeight: 700,
          boxShadow: '0px 4px 10px 0px rgba(0,0,0,0.2)',
        }}
        onClick={() => setOpened(true)}
      >
        Nova transação
      </Button>
    </Container>
  );
};

export default HeaderDashboard;
