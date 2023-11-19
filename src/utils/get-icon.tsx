import {
  SiAdobephotoshop,
  SiKrita,
  SiInkscape,
  SiAdobeillustrator,
} from "react-icons/si";
import { FaQuestion } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";

const getIcon = (program: string) => {
  switch (program) {
    case "Krita":
      return SiKrita;
    case "Photoshop":
      return SiAdobephotoshop;
    case "Inkscape":
      return SiInkscape;
    case "Ai":
      return SiAdobeillustrator;
    case "Figma":
      return CgFigma;
    // Добавьте другие программы и соответствующие им иконки по необходимости
    default:
      return FaQuestion;
  }
};

export default getIcon;