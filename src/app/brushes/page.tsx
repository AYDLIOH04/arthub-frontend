"use client";

import Brushes from "@/app/brushes/Brushes";
import BrushesSearch from "@/app/brushes/brushes-search";
import BrushesSelect from "@/app/brushes/brushes-select";
import { useState } from "react";

const BrushesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  return (
    <div className="w-full lg:max-w-[1400px] mx-auto mt-[120px] font-blender min-h-[calc(100vh - 120px)]">
      <div className="flex flex-col md:flex-row md:space-x-10 justify-center items-center md:mx-0 mx-2 mb-8 gap-1">
        <BrushesSearch
          onSearchChange={setSearch}
          setCurrentPage={setCurrentPage}
        />
        <BrushesSelect
          onSelectChange={setSelect}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Brushes
        search={search}
        select={select}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default BrushesPage;
