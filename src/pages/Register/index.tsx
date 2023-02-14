import { Box, Center } from '@mantine/core';
import ContainerImg from '../../components/ContainerImg';
import FormLogin from '../../components/FormLogin';
import FormRegister from '../../components/FormRegister';

const RegisterPage = () => {
  return (
    <Center sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <ContainerImg />
      <FormRegister />
    </Center>
  );
};

export default RegisterPage;
