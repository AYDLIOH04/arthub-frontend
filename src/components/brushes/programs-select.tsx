"use client";

import {
  SiAdobephotoshop,
  SiKrita,
  SiInkscape,
  SiAdobeillustrator,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";

import SelectButton from "../UI/select-button";

export default function ProgramsSelect() {
  const programsClick = () => {
    console.log(1);
  };

  return (
    <div className="flex space-x-4">
      <SelectButton onClick={programsClick}>
        <div>
          <SiAdobephotoshop />
        </div>
      </SelectButton>
      <SelectButton onClick={programsClick}>
        <SiKrita />
      </SelectButton>
      <SelectButton onClick={programsClick}>
        <SiInkscape />
      </SelectButton>
      <SelectButton onClick={programsClick}>
        <SiAdobeillustrator />
      </SelectButton>
      <SelectButton onClick={programsClick}>
        <CgFigma />
      </SelectButton>
    </div>
  );
}
