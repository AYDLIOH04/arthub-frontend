"use client";

import { useState } from "react";
import SearchInput from "../../components/UI/search-input";

const BrushesSearch = ({
  onSearchChange,
  setCurrentPage,
}: {
  onSearchChange: (search: string) => void;
  setCurrentPage: (page: number) => void;
}) => {
  const [search, setSearch] = useState("");

  const brushesSearchSubmit = () => {
    onSearchChange(search ? `search=${search}` : "");
    setCurrentPage(1);
  };

  return (
    <div>
      <SearchInput
        value={search}
        onChange={setSearch}
        onSubmit={brushesSearchSubmit}
      />
    </div>
  );
};

export default BrushesSearch;
