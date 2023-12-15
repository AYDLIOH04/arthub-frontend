"use client";

import { useState } from "react";
import SearchInput from "../../../components/UI/search-input";

const TutorialsSearch = ({
  onSearchChange,
  setCurrentPage,
}: {
  onSearchChange: (search: string) => void;
  setCurrentPage: (page: number) => void;
}) => {
  const [search, setSearch] = useState("");

  const tutorialsSearchSubmit = () => {
    onSearchChange(search ? `search=${search}` : "");
    setCurrentPage(1);
  };

  return (
    <SearchInput
      value={search}
      onChange={setSearch}
      onSubmit={tutorialsSearchSubmit}
    />
  );
};

export default TutorialsSearch;
