import {
  Box,
  Image,
  Text,
  TextInput,
  PasswordInput,
  Button,
} from '@mantine/core';
import { useForm, isNotEmpty, isEmail, hasLength } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import logoemp from '../../assets/Images/logoemp.svg';
import { useUserContext } from '../../contexts/userContext';

const FormRegister = () => {
  const { registerUser } = useUserContext();
  const isMobile = useMediaQuery('(max-width: 900px)');

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validate: {
      name: isNotEmpty('Campo obrigatório'),
      email: isEmail('Email inválido'),
      password: hasLength({ min: 8 }, 'Pelo menos 8 caracteres'),
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
        Faça seu cadastro
      </Text>
      <form
        onSubmit={form.onSubmit((values) => registerUser(values))}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minWidth: 300,
          gap: 15,
        }}
      >
        <TextInput
          placeholder="Insira seu nome completo"
          label="Nome completo"
          {...form.getInputProps('name')}
        />

        <TextInput
          placeholder="Insira seu e-mail"
          label="Email"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          placeholder="Insira sua senha"
          label="Senha"
          {...form.getInputProps('password')}
        />
        <Button
          type="submit"
          radius="md"
          sx={{ height: 50, backgroundColor: '#60CFFA' }}
        >
          FAZER CADASTRO
        </Button>
      </form>
      <Link to="/" style={{ width: '100%' }}>
        <Button
          sx={{ width: '100%', height: 50, backgroundColor: '#2D303D' }}
          radius="md"
        >
          JÁ TENHO UMA CONTA
        </Button>
      </Link>
    </Box>
  );
};

export default FormRegister;
