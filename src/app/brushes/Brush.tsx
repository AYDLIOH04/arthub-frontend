"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import { IBrush } from "@/models";
import { getProgramsIcon } from "@/utils/get-icon";
import { useRouter } from "next/navigation";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Brush = ({
  brush,
  openViewPopup,
  addToFavorite,
}: {
  brush: IBrush;
  openViewPopup: any;
  addToFavorite: any;
}) => {
  const router = useRouter();
  const user = useCurrentUser();

  const toggleFavorite = (event: any) => {
    event.stopPropagation();
    if (user.isAuth) {
      addToFavorite({brush});
    } else {
      router.push('/auth')
    }
  };

  const routeToProgram = (event: any, url: string) => {
    event.stopPropagation();
    router.push(url);
  };

  const Icon = getProgramsIcon(brush.program);
  const LikeIcon = brush.favorite ? FaHeart : FaRegHeart;
  return (
    <div
      onClick={() => openViewPopup(brush)}
      className="
      group cursor-pointer
      flex flex-col gap-3
      border-2 border-indigo-300
      rounded-md overflow-hidden
      max-w-[300px] min-h-[500px]
      hover:scale-105 scale-100
      transition duration-100
    "
    >
      <div className="mx-auto w-[200px] px-3 py-4 flex justify-center items-center">
        <img
          src={brush.image}
          alt={`Brush ${brush.image}`}
          className="h-full"
        />
        <div
          onClick={toggleFavorite}
          className={`
            cursor-pointer
            flex ${brush.favorite ? 'sm:flex' : 'sm:hidden'}  group-hover:flex 
            absolute right-2 top-2 w-[50px] h-[50px]
            transition duration-200 bg-white rounded-full
            justify-center items-center`}
        >
          <LikeIcon className="text-background" size={30} />
        </div>
      </div>
      <div
        className="
        bg-main_purple
        px-4 py-4 h-full
        flex flex-col gap-2
        "
      >
        <div className="flex gap-3 items-center justify-between mb-2">
          <h2 className="text-[20px] font-bold pb-1 border-b-2 border-indigo-300">
            {brush.title}
          </h2>
          <div
            onClick={(event) =>
              routeToProgram(event, `/programs/${brush.program.toLowerCase()}`)
            }
            className="flex flex-row items-center gap-2 cursor-pointer group/item"
          >
            <Icon className="text-[26px] sm:text-[20px] group-hover/item:text-indigo-200 transition" />
            <p className="hidden sm:block text-[14px] text-indigo-200">
              {brush.program}
            </p>
          </div>
        </div>
        <p className="text-[16px]">{brush.description}</p>
      </div>
    </div>
  );
};

export default Brush;
