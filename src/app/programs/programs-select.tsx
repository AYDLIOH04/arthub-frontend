"use client";

import selectIcons from "@/data/select/programs-select-icons";
import SelectButton from "../../components/UI/select-button";
import { useState } from "react";

const ProgramsSelect = ({
  onSelectChange,
}: {
  onSelectChange: (select: string) => void;
}) => {
  const [currentQuery, setCurrentQuery] = useState("");

  const programsClick = (query: string) => {
    setCurrentQuery(query);
    onSelectChange(`system=${query}`);
  };

  const removeSelect = () => {
    setCurrentQuery("");
    onSelectChange("");
  };

  return (
    <div className="flex flex-wrap space-x-4 md:mt-0 mt-3 justify-center">
      {selectIcons.map((p) => (
        <SelectButton
          key={p.text}
          text={p.text}
          icon={p.icon}
          query={p.query}
          currentQuery={currentQuery}
          onClick={programsClick}
          onRemove={removeSelect}
        />
      ))}
    </div>
  );
};

export default ProgramsSelect;
