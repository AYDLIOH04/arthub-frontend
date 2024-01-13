import Image from "next/image";
import {
  SiAdobephotoshop,
  SiKrita,
  SiInkscape,
  SiAdobeillustrator,
} from "react-icons/si";
import { FaLinux, FaQuestion, FaWindows } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import {
  ArthweaverIcon,
  ClipStudioPaintIcon,
  GimpIcon,
  MacosIcon,
  SaiIcon,
  SmoothdrawIcon,
} from "@/constants/icons";

import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

export const getProgramsIcon = (program: string) => {
  switch (program) {
    case "Krita":
      return SiKrita;
    case "Adobe Photoshop":
      return SiAdobephotoshop;
    case "Inkscape":
      return SiInkscape;
    case "Adobe Illustrator":
      return SiAdobeillustrator;
    case "Figma":
      return CgFigma;
    case "SAI Paint Tool":
      return SaiIcon;
    case "Gimp":
      return GimpIcon;
    case "Clip Studio Paint":
      return ClipStudioPaintIcon;
    case "Artweaver":
      return ArthweaverIcon;
    case "Smoothdraw":
      return SmoothdrawIcon;
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

type CustomIconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export const CustomIcon = ({
  src,
  alt,
  width,
  height,
  className,
}: CustomIconProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
