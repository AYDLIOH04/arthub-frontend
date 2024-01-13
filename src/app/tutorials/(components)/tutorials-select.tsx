"use client";

import selectIcons from "@/constants/select/difficulty-select-icons";
import SelectButton from "../../../components/selections/select-button";
import { useState } from "react";

const TutorialsSelect = ({
  onSelectChange,
  setCurrentPage,
}: {
  onSelectChange: (select: string) => void;
  setCurrentPage: (page: number) => void;
}) => {
  const [currentQuery, setCurrentQuery] = useState("");

  const onSelectClick = (query: string) => {
    setCurrentQuery(query);
    onSelectChange(`difficulty=${query}`);
    setCurrentPage(1);
  };

  const onSelectRemove = () => {
    setCurrentQuery("");
    onSelectChange("");
    setCurrentPage(1);
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
          onClick={onSelectClick}
          onRemove={onSelectRemove}
        />
      ))}
    </div>
  );
};

export default TutorialsSelect;
