"use client";

import BrushesSearch from "@/app/brushes/(components)/brushes-search";
import BrushesSelect from "@/app/brushes/(components)/brushes-select";
import Brushes from "@/app/brushes/(components)/Brushes";
import { useState } from "react";

const BrushesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  return (
    <div className="w-full lg:max-w-[1400px] mx-auto mt-[120px] font-blender min-h-[calc(100vh - 120px)]">
      <div className="mx-5">
        <div className="w-full lg:max-w-[1200px] flex flex-col md:flex-row md:space-x-10 justify-between items-center md:mx-auto mb-8 gap-1 md:px-5">
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
    </div>
  );
};

export default BrushesPage;
