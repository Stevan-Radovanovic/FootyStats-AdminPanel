import { Contract } from './contract.model';
import { Game } from './game.model';

export interface Player {
  id?: number;
  fullName: string;
  position: string;
  number: number;
  dateOfBirth: Date;
  contracts?: Contract[];
  games?: Game[];
}
