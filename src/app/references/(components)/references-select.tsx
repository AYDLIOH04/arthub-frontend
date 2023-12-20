"use client";
import mainSelection from "@/data/select/main-reference";
import secondSelection from "@/data/select/second-reference";
import LargeSelect from "@/components/UI/selections/large-select";
import { useEffect, useState } from "react";

const ReferencesSelect = ({
  onSelectChange,
}: {
  onSelectChange: (select: string) => void;
}) => {
  const [mainSelect, setMainSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");

  const onSelectSend = () => {
    onSelectChange(`tag=${mainSelect} ${secondSelect}`);
  };

  useEffect(() => {
    onSelectSend();
  }, [mainSelect, secondSelect]);

  const onMainSelectClick = (query: string) => {
    setMainSelect(query);
  };

  const onSecondSelectClick = (query: string) => {
    setSecondSelect(query);
  };

  const onMainSelectRemove = () => {
    setMainSelect("");
  };

  const onSecondSelectRemove = () => {
    setSecondSelect("");
  };

  return (
    <div className="flex gap-2 sm:flex-row flex-col">
      <LargeSelect
        label="Категория"
        onSelectClick={onMainSelectClick}
        onSelectRemove={onMainSelectRemove}
        selection={mainSelection}
      />
      <LargeSelect
        label="Подкатегория"
        onSelectClick={onSecondSelectClick}
        onSelectRemove={onSecondSelectRemove}
        selection={secondSelection}
      />
    </div>
  );
};

export default ReferencesSelect;
