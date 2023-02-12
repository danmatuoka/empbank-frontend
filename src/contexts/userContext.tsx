import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services';
import { useNavigate } from 'react-router-dom';
import { IUser, IUserLogin } from '../interfaces/user';
import { showNotification } from '@mantine/notifications';

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  user: IUser | null;
  signIn: (loginData: IUserLogin) => Promise<void>;
  registerUser: (registerData: IUser) => Promise<void>;
  token: string | null;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem('@empbank:token');

  const signIn = async (loginData: IUserLogin) => {
    try {
      const { data } = await api.post('/login', loginData);
      localStorage.setItem('@empbank:token', data.token);
      showNotification({ message: 'Login efetuado com sucesso' });
      navigate('/dashboard', { replace: true });
    } catch (err) {
      console.log(err);
      showNotification({ message: 'Algo deu errado!' });
    }
  };

  const registerUser = async (registerData: IUser) => {
    try {
      const { data } = await api.post('/user', registerData);
      setUser(data);
      showNotification({ message: 'Cadastro efetuado com sucesso' });
      navigate('/');
    } catch (err) {
      console.log(err);
      showNotification({ message: 'Algo deu errado!' });
    }
  };

  return (
    <UserContext.Provider
      value={{
        signIn,
        user,
        registerUser,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);
