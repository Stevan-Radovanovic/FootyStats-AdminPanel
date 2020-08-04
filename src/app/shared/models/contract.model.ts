import { Player } from './player.model';
import { Bonus } from './bonus.model';
export interface Contract {
  id?: number;
  startDate: Date;
  endDate: Date;
  player?: Player;
  bonuses?: Bonus[];
}
