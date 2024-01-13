"use client";
import mainSelection from "@/constants/select/main-reference";
import secondSelection from "@/constants/select/second-reference";
import LargeSelect from "@/components/selections/large-select";
import { useEffect, useState } from "react";
import SelectType from "@/components/selections/select.type";

const ReferencesSelect = ({
  onSelectChange,
}: {
  onSelectChange: (select: string) => void;
}) => {
  const [subcategory, setSubcategory] = useState<SelectType[]>(secondSelection);
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
    setSecondSelect("");
    setSubcategory(secondSelection.filter((sb) => sb.category === query));
  };

  const onSecondSelectClick = (query: string) => {
    setSecondSelect(query);
  };

  const onMainSelectRemove = () => {
    setMainSelect("");
    setSecondSelect("");
    setSubcategory(secondSelection);
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
        selection={subcategory}
      />
    </div>
  );
};

export default ReferencesSelect;
