import { Usuarios } from '../models/usuarios';

export class Usuario implements Usuarios{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  login: string;
  password: string;
  phone: string;
  createdAt: string;
  lastLogin: string;
  cars: [any];
}
