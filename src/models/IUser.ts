import { IBrush } from "./IBrush";

export interface IUser {
  id: number;
  username: string;
  email: string;
  favorites: IBrush[];
}
