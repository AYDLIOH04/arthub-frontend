import ProgramsSearch from "@/components/programs/programs-search";
import ProgramsSelect from "@/components/programs/programs-select";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Programs",
  description: "Programs",
};

const ProgramsPage = () => {
  return (
    <div className="w-full lg:max-w-[1400px] mx-auto mt-[120px] font-blender">
      <div className="flex flex-col md:flex-row md:space-x-10 justify-center items-center md:mx-0 mx-2 mb-5 gap-1">
        <ProgramsSearch />
        <ProgramsSelect />
      </div>
      {/* <Brushes /> */}
    </div>
  );
};

export default ProgramsPage;
