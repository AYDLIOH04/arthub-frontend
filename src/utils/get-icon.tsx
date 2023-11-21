import {
  SiAdobephotoshop,
  SiKrita,
  SiInkscape,
  SiAdobeillustrator,
} from "react-icons/si";
import { FaLinux, FaQuestion, FaWindows } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { MacosIcon } from "@/components/UI/icons";

export const getProgramsIcon = (program: string) => {
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

export const getSystemsIcon = (os: string) => {
  switch (os) {
    case "MacOS":
      return MacosIcon;
    case "Windows":
      return FaWindows;
    case "Linux":
      return FaLinux;
    default:
      return FaQuestion;
  }
};