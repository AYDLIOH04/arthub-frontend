"use client";
import selection from "@/data/select/bodyparts-select";
import LargeSelect from "@/components/UI/selections/large-select";

const ReferencesSelect = ({
  onSelectChange,
}: {
  onSelectChange: (select: string) => void;
}) => {
  const onSelectClick = (query: string) => {
    onSelectChange(`hastag=${query}`);
  };

  const onSelectRemove = () => {
    onSelectChange("");
  };

  return (
    <LargeSelect
      onSelectClick={onSelectClick}
      onSelectRemove={onSelectRemove}
      selection={selection}
    />
  );
};

export default ReferencesSelect;
