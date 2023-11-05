import BrushesList from "@/components/brushes/Brushes";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ArtHub | Brushes",
  description: "Brushes Page",
};

const BrushesPage = () => {
  return (
    <main>
      <h2>Brushes Page</h2>
      {/* <BrushesList/> */}
    </main>
  );
};

export default BrushesPage;
