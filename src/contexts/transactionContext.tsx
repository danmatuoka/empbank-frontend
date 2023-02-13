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
  loadAllTransactions: () => Promise<void>;
  transaction: ITransactionResponse | undefined;
  allTransactions: ITransaction[];
  formatData: (date: string) => string;
  formatValue: (value: string) => string;
  addNewTransaction: (transactionData: ITransactionReq) => Promise<void>;
  loadPagesNext: (page: number) => Promise<void>;
  totalEntries: (transactions: ITransaction[]) => number;
  totalOut: (transactions: ITransaction[]) => number;
  totalValues: (transactions: ITransaction[]) => number;
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TransactionContext = createContext({} as ITransactionContext);

const TransactionProvider = ({ children }: ITransactionProviderProps) => {
  const [transaction, setTransaction] = useState<ITransactionResponse>();
  const [allTransactions, setAllTransactions] = useState<ITransaction[]>([]);
  const [opened, setOpened] = useState(false);

  const addNewTransaction = async (transactionData: ITransactionReq) => {
    try {
      await api.post('/transaction', transactionData);
      loadTransactions();
      loadAllTransactions();
      showNotification({ message: 'Cadastro efetuado com sucesso' });
      setOpened(false);
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

  const loadAllTransactions = async () => {
    const token = localStorage.getItem('@empbank:token');

    if (token) {
      try {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const { data } = await api.get('/transaction/all');
        setAllTransactions(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const loadPagesNext = async (page: number) => {
    try {
      const { data } = await api.get(`/transaction?limit=5&page=${page}`);

      setTransaction(data);
    } catch (error) {
      console.error(error);
    }
  };

  const totalEntries = (transactions: ITransaction[]) => {
    const filterEntries = transactions!.filter(
      (elem) => elem.type.toLowerCase() == 'entrada'
    );
    if (filterEntries.length == 0) {
      return 0;
    }

    return filterEntries.reduce((a, b) => {
      return a + parseFloat(b.value);
    }, 0);
  };

  const totalOut = (transactions: ITransaction[]) => {
    const filterOut = transactions!.filter(
      (elem) => elem.type.toLowerCase() == 'saída'
    );
    console.log(filterOut);
    if (filterOut.length == 0) {
      return 0;
    }
    return filterOut.reduce((a, b) => {
      return a + parseFloat(b.value);
    }, 0);
  };

  const totalValues = (transactions: ITransaction[]) => {
    return totalEntries(transactions) - totalOut(transactions);
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
        loadAllTransactions,
        transaction,
        allTransactions,
        formatData,
        formatValue,
        addNewTransaction,
        loadPagesNext,
        totalEntries,
        totalOut,
        totalValues,
        opened,
        setOpened,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;

export const useTransactionContext = () => useContext(TransactionContext);
