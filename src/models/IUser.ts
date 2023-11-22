import { IProgram, IReference, ITutorial } from ".";
import { IBrush } from "./IBrush";

export interface IUser {
  id: number;
  login: string;
  email: string;
  brushes: IBrush[];
  tutorials: ITutorial[];
  references: IReference[];
  programs: IProgram[];
}
