'use client'

import ProgramsList from "@/app/programs/program-list";
import ProgramsSearch from "@/app/programs/programs-search";
import ProgramsSelect from "@/app/programs/programs-select";
import { useState } from "react";

const ProgramsPage = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  return (
    <div className="w-full lg:max-w-[1200px] mx-auto mt-[120px] font-blender lg:min-h-[calc(100vh - 120px)]">
      <div className="mx-5">
        <div className="flex flex-col md:flex-row md:space-x-10 justify-between items-center md:mx-0 mx-2 mb-5 gap-1">
          <ProgramsSearch onSearchChange={setSearch} />
          <ProgramsSelect onSelectChange={setSelect} />
        </div>
        <ProgramsList search={search} select={select} />
      </div>
    </div>
  );
};

export default ProgramsPage;
