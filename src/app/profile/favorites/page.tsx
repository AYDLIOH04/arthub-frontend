import { Metadata } from "next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FavoriteBrushes from "./(components)/brushes/favorite-brushes";
import FavoritePrograms from "./(components)/programs/favorite-programs";
import FavoriteReferences from "./(components)/references/favorite-references";
import FavoriteTutorials from "./(components)/tutorials/favorite-tutorials";

export const metadata: Metadata = {
  title: "Arthub | Favorites",
};

const FavoritesPage = () => {
  return (
    <main className="mt-6 relative">
      <FavoritePrograms />
      <FavoriteBrushes />
      <FavoriteReferences />
      <FavoriteTutorials />
    </main>
  );
};

export default FavoritesPage;
