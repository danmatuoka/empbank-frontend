import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services';
import { IUser, IUserLogin } from '../interfaces/user';
import { showNotification } from '@mantine/notifications';
import {
  ITransaction,
  ITransactionReq,
  ITransactionResponse,
} from '../interfaces/transaction';

interface ITransactionProviderProps {
  children: ReactNode;
}

interface ITransactionContext {
  loadTransactions: () => Promise<void>;
  transaction: ITransactionResponse | null;
  formatData: (date: string) => string;
  formatValue: (value: string) => string;
  addNewTransaction: (transactionData: ITransactionReq) => Promise<void>;
}

export const TransactionContext = createContext({} as ITransactionContext);

const TransactionProvider = ({ children }: ITransactionProviderProps) => {
  const [transaction, setTransaction] = useState(null);

  const addNewTransaction = async (transactionData: ITransactionReq) => {
    try {
      await api.post('/transaction', transactionData);
      loadTransactions();
      showNotification({ message: 'Cadastro efetuado com sucesso' });
    } catch (err) {
      console.log(err);
      showNotification({ message: 'Algo deu errado!' });
    }
  };

  const loadTransactions = async () => {
    const token = localStorage.getItem('@empbank:token');

    if (token) {
      try {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const { data } = await api.get('/transaction');
        console.log(data);

        setTransaction(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const formatData = (date: string) => {
    const newDate = new Date(date);

    return new Intl.DateTimeFormat('pt-BR').format(newDate);
  };

  const formatValue = (value: string) => {
    const newValue = parseFloat(value);

    return newValue.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <TransactionContext.Provider
      value={{
        loadTransactions,
        transaction,
        formatData,
        formatValue,
        addNewTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;

export const useTransactionContext = () => useContext(TransactionContext);
