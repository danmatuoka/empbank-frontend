import { Box, Center } from '@mantine/core';
import ContainerImg from '../../components/ContainerImg';
import FormLogin from '../../components/FormLogin';

const LoginPage = () => {
  return (
    <Center sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <ContainerImg />
      <FormLogin />
    </Center>
  );
};

export default LoginPage;
