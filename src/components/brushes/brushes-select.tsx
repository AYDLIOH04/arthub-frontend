"use client";

import {
  SiAdobephotoshop,
  SiKrita,
  SiInkscape,
  SiAdobeillustrator,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";

import SelectButton from "../UI/select-button";
import { ReactElement } from "react";

type Program = {
  text: string;
  query: string;
  icon?: ReactElement;
};

const programList: Program[] = [
  { text: "Krita", icon: <SiKrita />, query: "krita" },
  { text: "PS", icon: <SiAdobephotoshop />, query: "photoshop" },
  { text: "Ink", icon: <SiInkscape />, query: "ink" },
  { text: "AI", icon: <SiAdobeillustrator />, query: "adobe-illustrator" },
  { text: "Figma", icon: <CgFigma />, query: "figma" },
];

const BrushesSelect = () => {
  const brushesClick = (query: string) => {
    console.log(query);
  };

  return (
    <div className="flex flex-wrap space-x-4 md:mt-0 mt-3 justify-center">
      {programList.map((p) => (
        <SelectButton
          key={p.text}
          onClick={() => brushesClick(p.query)}
          text={p.text}
        >
          {p.icon}
        </SelectButton>
      ))}
    </div>
  );
};

export default BrushesSelect;
