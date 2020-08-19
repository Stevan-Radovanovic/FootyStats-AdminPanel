import { Contract } from './contract.model';

export interface Bonus {
  id?: number;
  description: string;
  amount: number;
  contractId: number;
}
