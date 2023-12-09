"use client";

import { useState } from "react";
import ReferenceList from "./reference-list";
import ReferencesSearch from "./references-search";
import ReferencesSelect from "./references-select";

const TutorialsPage = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  return (
    <div className="w-full lg:max-w-[1200px] mx-auto mt-[120px] font-blender lg:min-h-[calc(100vh - 120px)]">
      <div className="mx-5">
        <div className="flex flex-col md:flex-row md:space-x-10 justify-between items-center mx-0 mb-5 gap-5">
          <ReferencesSearch onSearchChange={setSearch} />
          <ReferencesSelect onSelectChange={setSelect} />
        </div>
        <ReferenceList />
      </div>
    </div>
  );
};

export default TutorialsPage;
