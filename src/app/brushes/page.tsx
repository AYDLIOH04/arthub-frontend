import Brushes from "@/components/brushes/brushes";
import BrushesSearch from "@/components/brushes/brushes-search";
import BrushesSelect from "@/components/brushes/brushes-select";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Brushes",
  description: "Brushes Page",
};

const BrushesPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-[120px]">
      <div className="md:flex md:space-x-10 items-center md:mx-0 mx-2 mb-5">
        <BrushesSearch />
        <BrushesSelect />
      </div>
      <Brushes />
    </div>
  );
};

export default BrushesPage;
