export interface IWorker {
  id: string;
  cpf: string;
  email: string;
}

export interface ISession {
  token: string;
  user: IWorker;
}

export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
