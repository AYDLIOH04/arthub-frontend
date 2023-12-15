"use client";

import TutorialsSearch from "./(components)/tutorials-search";
import TutorialsSelect from "./(components)/tutorials-select";
import TutorialList from "./(components)/tutorial-list";
import { useState } from "react";

const TutorialsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  return (
    <div className="w-full lg:max-w-[1200px] mx-auto mt-[120px] font-blender lg:min-h-[calc(100vh - 120px)]">
      <div className="mx-5">
        <div className="flex flex-col md:flex-row md:space-x-10 justify-between items-center mx-0 mb-5 gap-5">
          <TutorialsSearch
            onSearchChange={setSearch}
            setCurrentPage={setCurrentPage}
          />
          <TutorialsSelect
            onSelectChange={setSelect}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <TutorialList
          search={search}
          select={select}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default TutorialsPage;
