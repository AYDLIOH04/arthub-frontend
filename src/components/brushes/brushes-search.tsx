"use client";

import { useState } from "react";
import SearchInput from "../UI/search-input";

export default function BrushesSearch() {
  const [search, setSearch] = useState("");

  const brushesSearchSubmit = (e: any) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };

  return (
    <SearchInput
      value={search}
      onChange={setSearch}
      onSubmit={brushesSearchSubmit}
    />
  );
}
