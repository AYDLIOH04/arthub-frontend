"use client";

import { useState } from "react";
import SearchInput from "../../components/UI/search-input";

const ProgramsSearch = () => {
  const [search, setSearch] = useState("");

  const programsSearchSubmit = (e: any) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
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
