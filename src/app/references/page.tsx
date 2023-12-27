"use client";

import { useState } from "react";
import ReferencesSelect from "./(components)/references-select";
import References from "./(components)/references-fetch";

const TutorialsPage = () => {
  const [select, setSelect] = useState("");

  return (
    <div className="w-full lg:max-w-[1200px] mx-auto mt-[120px] font-blender lg:min-h-[78vh] md:min-h-[70vh] min-h-[66.3vh]">
      <div className="mx-5">
        <ReferencesSelect onSelectChange={setSelect} />
        <References select={select}/>
      </div>
    </div>
  );
};

export default TutorialsPage;
