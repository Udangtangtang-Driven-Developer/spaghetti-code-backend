export interface IUser {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  nickname: string;
  email: string;
  password: string;
  country: string;
  city: string;
}

export type NewUserParams = Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>;
