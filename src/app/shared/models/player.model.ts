interface Player {
  id?: number;
  fullName: string;
  position: string;
  shirtNumber: number;
  dateOfBirth: Date;
  contracts?: Contract[];
  games?: Game[];
}
