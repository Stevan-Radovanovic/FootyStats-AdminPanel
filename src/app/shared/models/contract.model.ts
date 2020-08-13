import { Player } from './player.model';
import { Bonus } from './bonus.model';
export interface Contract {
  id?: number;
  startingDate: Date;
  endingDate: Date;
  weeklySalary: number;
  player?: Player;
  bonuses?: Bonus[];
}
