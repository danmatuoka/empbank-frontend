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

const FormRegister = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validate: {
      name: isNotEmpty('Campo obrigatório'),
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
        gap: 15,
        padding: 5,
      }}
    >
      <Image src={logoemp} alt="logo empbank" />
      <Text sx={{ fontSize: 30, fontWeight: 700 }}>Faça seu login</Text>
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
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
