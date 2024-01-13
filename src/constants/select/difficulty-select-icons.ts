import { SelectIconsType } from "./select-icons.type";
import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

const selection: SelectIconsType[] = [
  { text: "Easy", query: "easy", icon: TbStar },
  { text: "Normal", query: "normal", icon: TbStarHalfFilled },
  { text: "Hard", query: "hard", icon: TbStarFilled },
];

export default selection