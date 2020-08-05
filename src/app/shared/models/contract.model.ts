import { Player } from './player.model';
import { Bonus } from './bonus.model';
export interface Contract {
  id?: number;
  startDate: Date;
  endDate: Date;
  weeklySalary: number;
  player?: Player;
  bonuses?: Bonus[];
}
