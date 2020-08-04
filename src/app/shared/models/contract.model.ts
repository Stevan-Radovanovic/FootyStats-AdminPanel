interface Contract {
  id?: number;
  startDate: Date;
  endDate: Date;
  player?: Player;
  bonuses?: Bonus[];
}
