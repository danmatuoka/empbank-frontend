import {
  Box,
  Image,
  Text,
  TextInput,
  PasswordInput,
  Button,
} from '@mantine/core';
import { useForm, isNotEmpty, isEmail } from '@mantine/form';
import { Link } from 'react-router-dom';
import logoemp from '../../assets/Images/logoemp.svg';
import { useUserContext } from '../../contexts/userContext';
import { useMediaQuery } from '@mantine/hooks';

const FormLogin = () => {
  const { signIn } = useUserContext();
  const isMobile = useMediaQuery('(max-width: 900px)');

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: isEmail('Email inválido'),
      password: isNotEmpty('Campo obrigatório'),
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: isMobile ? 100 : 0,
        gap: 15,
        padding: isMobile ? 20 : 5,
      }}
    >
      <Image src={logoemp} alt="logo empbank" />
      <Text sx={{ fontSize: isMobile ? 20 : 30, fontWeight: 700 }}>
        Faça seu login
      </Text>
      <form
        onSubmit={form.onSubmit((values) => signIn(values))}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minWidth: 300,
          gap: 15,
        }}
      >
        <TextInput
          placeholder="Insira seu e-mail"
          label="Email"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          placeholder="Insira seu senha"
          label="Senha"
          {...form.getInputProps('password')}
        />
        <Button
          type="submit"
          radius="md"
          sx={{ height: 50, backgroundColor: '#60CFFA' }}
        >
          FAZER LOGIN
        </Button>
      </form>
      <Link to="/register" style={{ width: '100%' }}>
        <Button
          sx={{ width: '100%', height: 50, backgroundColor: '#2D303D' }}
          radius="md"
        >
          CRIAR CONTA
        </Button>
      </Link>
    </Box>
  );
};

export default FormLogin;
