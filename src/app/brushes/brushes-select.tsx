"use client";

import selectIcons from "@/data/select/brushes-select-icons";
import SelectButton from "../../components/UI/select-button";
import { useState } from "react";

const BrushesSelect = ({
  onSelectChange,
  setCurrentPage,
}: {
  onSelectChange: (select: string) => void;
  setCurrentPage: (page: number) => void;
}) => {
  const [currentQuery, setCurrentQuery] = useState("");

  const brushesClick = (query: string) => {
    setCurrentQuery(query);
    onSelectChange(`program=${query}`);
    setCurrentPage(1);
  };

  const removeSelect = () => {
    setCurrentQuery("");
    onSelectChange("");
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-wrap space-x-4 md:mt-0 mt-3 justify-center items-center">
      {selectIcons.map((p) => (
        <SelectButton
          key={p.text}
          onClick={brushesClick}
          onRemove={removeSelect}
          currentQuery={currentQuery}
          query={p.query}
          text={p.text}
          icon={p.icon}
        />
      ))}
    </div>
  );
};

export default BrushesSelect;
