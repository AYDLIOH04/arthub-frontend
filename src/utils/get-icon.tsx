import {
  SiAdobephotoshop,
  SiKrita,
  SiInkscape,
  SiAdobeillustrator,
} from "react-icons/si";
import { FaLinux, FaQuestion, FaWindows } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { MacosIcon } from "@/components/UI/icons";

import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

export const getProgramsIcon = (program: string) => {
  switch (program) {
    case "Krita":
      return SiKrita;
    case "Photoshop":
      return SiAdobephotoshop;
    case "Inkscape":
      return SiInkscape;
    case "Illustrator":
      return SiAdobeillustrator;
    case "Figma":
      return CgFigma;
    default:
      return FaQuestion;
  }
};

export const getSystemsIcon = (os: string) => {
  switch (os) {
    case "Macos":
      return MacosIcon;
    case "Windows":
      return FaWindows;
    case "Linux":
      return FaLinux;
    default:
      return FaQuestion;
  }
};

export const getDifficultyIcon = (d: string) => {
  switch (d) {
    case "easy":
      return TbStar;
    case "normal":
      return TbStarHalfFilled;
    case "hard":
      return TbStarFilled;
    default:
      return FaQuestion;
  }
};