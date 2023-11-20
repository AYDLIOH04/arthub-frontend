import { SelectIconsType } from "./select-icons.type";

import {
  SiAdobephotoshop,
  SiKrita,
  SiInkscape,
  SiAdobeillustrator,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";

const selectIcons: SelectIconsType[] = [
  { text: "Krita", icon: SiKrita, query: "krita" },
  { text: "PS", icon: SiAdobephotoshop, query: "photoshop" },
  { text: "Ink", icon: SiInkscape, query: "ink" },
  { text: "AI", icon: SiAdobeillustrator, query: "adobe-illustrator" },
  { text: "Figma", icon: CgFigma, query: "figma" },
];

export default selectIcons;