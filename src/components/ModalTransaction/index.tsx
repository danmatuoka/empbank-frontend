import { Modal, Button, TextInput, Select, Text, Group } from '@mantine/core';
import { useForm, isNotEmpty, isEmail } from '@mantine/form';
import { IconArrowUpCircle, IconCircleArrowDown } from '@tabler/icons-react';
import { useState } from 'react';
import { useTransactionContext } from '../../contexts/transactionContext';

interface ModalProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalTransaction = ({ opened, setOpened }: ModalProps) => {
  const [incoming, setIncoming] = useState(false);
  const [outflow, setOutflow] = useState(false);
  const { addNewTransaction } = useTransactionContext();

  const form = useForm({
    initialValues: {
      title: '',
      value: '',
      category: '',
      type: '',
    },

    validate: {
      title: isNotEmpty('Campo obrigatório'),
      value: isNotEmpty('Campo obrigatório'),
      category: isNotEmpty('Campo obrigatório'),
      type: isNotEmpty('Campo obrigatório'),
    },
  });

  return (
    <Modal
      opened={opened}
      sx={{ fontWeight: 700 }}
      title="Nova transação"
      onClose={() => setOpened(false)}
    >
      <form
        onSubmit={form.onSubmit((values) => addNewTransaction(values))}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 15,
        }}
      >
        <TextInput
          placeholder="Insira o título da transação"
          label="Título"
          {...form.getInputProps('title')}
        />

        <TextInput
          placeholder="Insira o valor da transação"
          label="Valor"
          {...form.getInputProps('value')}
        />

        <Select
          placeholder="Selecione uma categoria"
          label="Categoria"
          data={[
            { value: 'alimentação', label: 'Alimentação' },
            { value: 'salario', label: 'Salário' },
            { value: 'transporte', label: 'Transporte' },
            { value: 'aluguel', label: 'Aluguel' },
          ]}
          {...form.getInputProps('category')}
        />
        <Group position="center" grow {...form.getInputProps('type')}>
          <Button
            value="entrada"
            leftIcon={<IconArrowUpCircle color="green" />}
            variant={incoming == false ? 'default' : 'light'}
            sx={{ height: 50 }}
            onClick={(e) => {
              form.setValues({
                type: e.currentTarget.value,
              });
              setIncoming(!incoming);
              setOutflow(false);
            }}
          >
            Entrada
          </Button>
          <Button
            value="saida"
            leftIcon={<IconCircleArrowDown color="red" />}
            variant={outflow == false ? 'default' : 'light'}
            sx={{ height: 50 }}
            onClick={(e) => {
              form.setValues({
                type: e.currentTarget.value,
              });
              setOutflow(!outflow);
              setIncoming(false);
            }}
          >
            Saida
          </Button>
        </Group>
        <Button
          type="submit"
          radius="md"
          sx={{ height: 50, backgroundColor: '#60CFFA' }}
        >
          Adicionar
        </Button>
      </form>
    </Modal>
  );
};

export default ModalTransaction;
