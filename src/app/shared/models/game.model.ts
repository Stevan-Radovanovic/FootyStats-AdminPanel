import { Player } from './player.model';

export interface Game {
  id?: number;
  result: string;
  opponentName: string;
  dateOfPlaying: Date;
  playerStats?: Player[];
}
