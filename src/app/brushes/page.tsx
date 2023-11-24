import MainFooter from "@/components/UI/main-footer";
import Brushes from "@/app/brushes/Brushes";
import BrushesSearch from "@/app/brushes/brushes-search";
import BrushesSelect from "@/app/brushes/brushes-select";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Brushes",
  description: "Brushes Page",
};

const BrushesPage = () => {
  return (
    <>
      <div className="w-full lg:max-w-[1400px] mx-auto mt-[120px] font-blender min-h-[calc(100vh - 120px)]">
        <div className="flex flex-col md:flex-row md:space-x-10 justify-center items-center md:mx-0 mx-2 mb-5 gap-1">
          <BrushesSearch />
          <BrushesSelect />
        </div>
        <Brushes />
      </div>
      <MainFooter />
    </>
  );
};

export default BrushesPage;
