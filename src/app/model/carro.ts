import { Carros } from '../models/carros';

export class Carro implements Carros {
  id: number;
  year: number;
  licensePlate: string;
  model: string;
  color: string;
  count: number;
}
