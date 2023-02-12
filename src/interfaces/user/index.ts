export interface IUser {
  name: string;
  email: string;
  password: string;
}

export type IUserLogin = Omit<IUser, 'name'>;
