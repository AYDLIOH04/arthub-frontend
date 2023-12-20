"use client";

import { useState } from "react";
import ReferenceList from "./(components)/reference-list";
import ReferencesSelect from "./(components)/references-select";

const TutorialsPage = () => {
  const [select, setSelect] = useState("");

  return (
    <div className="w-full lg:max-w-[1200px] mx-auto mt-[120px] font-blender lg:min-h-[calc(100vh - 120px)]">
      <div className="mx-5">
        <ReferencesSelect onSelectChange={setSelect} />
        <ReferenceList select={select}/>
      </div>
    </div>
  );
};

export default TutorialsPage;
