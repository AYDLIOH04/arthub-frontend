"use client";

import { useState } from "react";
import ReferencesSelect from "./(components)/references-select";
import References from "./(components)/references-fetch";
import ScrollButton from "@/components/UI/scroll-button";

const TutorialsPage = () => {
  const [select, setSelect] = useState("");

  return (
    <div className="mx-3 mt-[120px] font-blender lg:min-h-[78vh] md:min-h-[70vh] min-h-[66.3vh]">
      <div className="w-full lg:max-w-[1200px] sm:mx-auto">
        <ReferencesSelect onSelectChange={setSelect} />
      </div>
      <References select={select} />
      <ScrollButton />
    </div>
  );
};

export default TutorialsPage;
