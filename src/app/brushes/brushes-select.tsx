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
  const [active, setActive] = useState(false);

  const brushesClick = (query: string) => {
    if (active) {
      onSelectChange('');
      setCurrentPage(1);
      setActive(false)
    } else {
      const q = query[0].toUpperCase() + query.slice(1);
      onSelectChange(`program=${q}`);
      setCurrentPage(1);
      setActive(true)
    }
  };

  return (
    <div
      className="flex flex-wrap space-x-4 md:mt-0 mt-3 justify-center"
    >
      {selectIcons.map((p) => (
        <SelectButton
          key={p.text}
          onClick={() => brushesClick(p.query)}
          text={p.text}
          icon={p.icon}
        />
      ))}
    </div>
  );
};

export default BrushesSelect;
