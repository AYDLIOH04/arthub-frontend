import Link from "next/link";
import { TbPhotoSquareRounded } from "react-icons/tb";

const FavoriteReferencesNotFound = () => {
  return (
    <div className="flex justify-center items-center h-[350px] bg-page_elem_bg rounded-xl">
      <div className="text-center">
        <div className="w-[80px] h-[80px] mx-auto flex justify-center items-center bg-hover rounded-full mb-5">
          <TbPhotoSquareRounded size={60} className="text-page_elem_bg" />
        </div>
        <h2 className="font-bold text-4xl uppercase">Not Found</h2>
        <p className="text-2xl mb-5">Референсы не найдены</p>
        <Link
          href="/references"
          className="text-2xl px-3 py-2 rounded-md bg-hover hover:opacity-70 duration-200"
        >
          Добавить референс
        </Link>
      </div>
    </div>
  );
};

export default FavoriteReferencesNotFound;
