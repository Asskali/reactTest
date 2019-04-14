import { GameGenre } from '../enum/enum';

export interface IGame {
  title: string;
  genre: GameGenre;
  rating: number;
}
