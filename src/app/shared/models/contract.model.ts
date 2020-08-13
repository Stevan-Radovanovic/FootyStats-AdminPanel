import { Player } from './player.model';
import { Bonus } from './bonus.model';
export interface Contract {
  id?: number;
  startingDate: Date;
  endingDate: Date;
  weeklySalary: number;
  playerId?: number;
  bonuses?: Bonus[];
}
