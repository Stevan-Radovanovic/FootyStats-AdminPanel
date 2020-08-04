interface Game {
  id?: number;
  result: string;
  opponent: string;
  dateOfPlaying: Date;
  playerStats?: Player[];
}
