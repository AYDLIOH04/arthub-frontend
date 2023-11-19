import Brushes from "@/components/brushes/Brushes";
import BrushesSearch from "@/components/brushes/brushes-search";
import BrushesSelect from "@/components/brushes/brushes-select";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Brushes",
  description: "Brushes Page",
};

const BrushesPage = () => {
  return (
    <div className="w-full lg:max-w-[1400px] mx-auto mt-[120px] font-blender">
      <div className="flex flex-col md:flex-row md:space-x-10 justify-center items-center md:mx-0 mx-2 mb-5 gap-1">
        <BrushesSearch />
        <BrushesSelect />
      </div>
      <Brushes />
    </div>
  );
};

export default BrushesPage;
