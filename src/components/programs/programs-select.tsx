"use client";

import { FaWindows, FaLinux } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";

import SelectButton from "../UI/select-button";
import { ReactElement } from "react";

type Program = {
  text: string;
  query: string;
  icon?: ReactElement;
};

const programList: Program[] = [
  { text: "MacOS", icon: <SiMacos />, query: "macos" },
  { text: "Windows", icon: <FaWindows />, query: "windows" },
  { text: "Linux", icon: <FaLinux />, query: "linux" },
];

const ProgramsSelect = () => {
  const programsClick = (query: string) => {
    console.log(query);
  };

  return (
    <div className="flex flex-wrap space-x-4 md:mt-0 mt-3 justify-center">
      {programList.map((p) => (
        <SelectButton
          key={p.text}
          onClick={() => programsClick(p.query)}
          text={p.text}
        >
          {p.icon}
        </SelectButton>
      ))}
    </div>
  );
};

export default ProgramsSelect;
