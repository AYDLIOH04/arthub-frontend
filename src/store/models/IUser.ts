import { IBrushes } from "./IBrushes";

export interface IUser {
  id: number;
  username: string;
  email: string;
  favorites: IBrushes[];
}
