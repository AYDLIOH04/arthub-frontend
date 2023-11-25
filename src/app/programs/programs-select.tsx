"use client";

import selectIcons from "@/data/select/programs-select-icons";
import SelectButton from "../../components/UI/select-button";

const ProgramsSelect = () => {
  const programsClick = (query: string) => {
    console.log(query);
  };

  return (
    <div className="flex flex-wrap space-x-4 md:mt-0 mt-3 justify-center">
      {selectIcons.map((p) => (
        <SelectButton
          key={p.text}
          onClick={() => programsClick(p.query)}
          text={p.text}
          icon={p.icon}
          query={""}
          currentQuery={""}
          onRemove={undefined}
        />
      ))}
    </div>
  );
};

export default ProgramsSelect;
