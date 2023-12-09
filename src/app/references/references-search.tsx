"use client";

import { useState } from "react";
import SearchInput from "../../components/UI/search-input";

const ReferencesSearch = ({
  onSearchChange,
}: {
  onSearchChange: (search: string) => void;
}) => {
  const [search, setSearch] = useState("");

  const referencesSearchSubmit = () => {
    onSearchChange(search ? `search=${search}` : "");
  };

  return (
    <SearchInput
      value={search}
      onChange={setSearch}
      onSubmit={referencesSearchSubmit}
    />
  );
};

export default ReferencesSearch;
