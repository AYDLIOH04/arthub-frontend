"use client";

import LargeSelect from "@/components/selections/large-select";
import selectIcons from "@/constants/select/brushes-select";

const BrushesSelect = ({
  onSelectChange,
  setCurrentPage,
}: {
  onSelectChange: (select: string) => void;
  setCurrentPage: (page: number) => void;
}) => {
  const onSelectClick = (query: string) => {
    onSelectChange(`program=${query}`);
    setCurrentPage(1);
  };

  const onSelectRemove = () => {
    onSelectChange("");
    setCurrentPage(1);
  };

  return (
    <LargeSelect
      onSelectClick={onSelectClick}
      onSelectRemove={onSelectRemove}
      selection={selectIcons}
    />
  );
};

export default BrushesSelect;
