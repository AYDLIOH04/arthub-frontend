"use client";

import { useState } from "react";
import SearchInput from "../../components/UI/search-input";

const ProgramsSearch = ({
  onSearchChange,
}: {
  onSearchChange: (search: string) => void;
}) => {
  const [search, setSearch] = useState("");

  const programsSearchSubmit = () => {
    onSearchChange(search ? `search=${search}` : "")
  };

  return (
    <SearchInput
      value={search}
      onChange={setSearch}
      onSubmit={programsSearchSubmit}
    />
  );
};

export default ProgramsSearch;
