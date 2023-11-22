import MainFooter from "@/components/UI/main-footer";
import ProgramsList from "@/components/programs/program-list";
import ProgramsSearch from "@/components/programs/programs-search";
import ProgramsSelect from "@/components/programs/programs-select";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Programs",
  description: "Programs",
};

const ProgramsPage = () => {
  return (
    <>
      <div className="w-full lg:max-w-[1200px] mx-auto mt-[120px] font-blender lg:min-h-[calc(100vh - 120px)]">
        <div className="mx-5">
          <div className="flex flex-col md:flex-row md:space-x-10 justify-between items-center md:mx-0 mx-2 mb-5 gap-1">
            <ProgramsSearch />
            <ProgramsSelect />
          </div>
          <ProgramsList />
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default ProgramsPage;
