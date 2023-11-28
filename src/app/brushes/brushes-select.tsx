"use client";

import selectIcons from "@/data/select/brushes-select-icons";
import SelectButton from "../../components/UI/select-button";
import { useState } from "react";
import { getProgramsIcon } from "@/utils/get-icon";

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
      {selectIcons.map((p) => {
        const Icon = getProgramsIcon(p.query[0].toUpperCase() + p.query.slice(1));
        return (
          <SelectButton
            key={p.text}
            onClick={brushesClick}
            onRemove={removeSelect}
            currentQuery={currentQuery}
            query={p.query}
            text={p.text}
            icon={Icon}
          />
        );
      })}
    </div>
  );
};

export default BrushesSelect;
