import { getProgramsIcon } from "@/utils/get-icon";
import { useRouter } from "next/navigation";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IBrush } from "@/models";
import { useState } from "react";

const BrushSlide = ({
  brush,
  toggleFavorite,
  openViewPopup,
}: {
  brush: IBrush;
  toggleFavorite: any;
  openViewPopup: any;
}) => {
  const router = useRouter();
  const [favorite, setFavorite] = useState(true);

  const onToggleFavorite = (event: any) => {
    event.stopPropagation();
    toggleFavorite({ brush });
    setFavorite((current) => !current);
  };

  const routeToProgram = (event: any, url: string) => {
    event.stopPropagation();
    router.push(url);
  };

  const Icon = getProgramsIcon(brush.program);
  const LikeIcon = favorite ? FaHeart : FaRegHeart;

  return (
    <div
      onClick={() => openViewPopup(brush)}
      className="rounded-md px-3 py-5 flex justify-center"
    >
      <div
        className="group cursor-pointer flex flex-col gap-3 border-2 border-indigo-300 rounded-md overflow-hidden
          max-w-[300px] h-[550px] sm:hover:scale-105 scale-100 transition duration-100
        "
      >
        <div className="mx-auto max-h-[200px] h-1/2 px-3 py-4 flex justify-center items-center">
          <img
            src={brush.image}
            alt={`Brush ${brush.image}`}
            className="h-full"
          />
          <div
            onClick={onToggleFavorite}
            className={`cursor-pointer flex ${
              favorite ? "sm:flex" : "sm:hidden"
            }  group-hover:flex 
            absolute right-2 top-2 w-[50px] h-[50px]  hover:bg-gray-300  hover:scale-110
            transition duration-200 bg-white rounded-full
            justify-center items-center`}
          >
            <LikeIcon className="text-background" size={30} />
          </div>
        </div>
        <div className="bg-main_purple px-4 py-4 h-full flex flex-col gap-2">
          <div className="flex gap-3 items-center justify-between mb-2">
            <h2 className="text-[20px] font-bold pb-1 border-b-2 border-indigo-300">
              {brush.title}
            </h2>
            <div
              onClick={(event) =>
                routeToProgram(
                  event,
                  `/programs/${brush.program.toLowerCase()}`
                )
              }
              className="flex flex-row items-center gap-2 cursor-pointer group/item"
            >
              <Icon className="text-[28px] hover:text-indigo-200 transition" />
            </div>
          </div>
          <p className="text-[16px] overflow-auto">{brush.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BrushSlide;
