export interface ITransaction {
  id: string;
  title: string;
  value: string;
  category: string;
  type: string;
  created_at: string;
}

export interface ITransactionResponse {
  count: number;
  page: string;
  transactions: ITransaction[];
}

export type ITransactionReq = Omit<ITransaction, 'id' | 'created_at'>;
