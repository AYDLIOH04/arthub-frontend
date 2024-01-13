import PhotoLoader from "@/components/UI/skeletons/photo-loader";
import { IProgram } from "@/models";
import { getSystemsIcon } from "@/utils/icon-utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProgramSlide = ({
  program,
  toggleFavorite,
}: {
  program: IProgram;
  toggleFavorite: any;
}) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const router = useRouter();
  const [favorite, setFavorite] = useState(true);

  const onToggleFavorite = (event: any) => {
    event.stopPropagation();
    toggleFavorite({ program });
    setFavorite((current) => !current);
  };

  const onProgramClick = () => {
    router.push(`/programs/${program.name.toLowerCase()}`);
  };

  const onImageLoad = (event: any) => {
    setIsImageLoading(false);
  };

  const icons = program.systems.map((system) => getSystemsIcon(system));
  const LikeIcon = favorite ? FaHeart : FaRegHeart;
  return (
    <div
      onClick={onProgramClick}
      className="rounded-md px-3 py-5 flex justify-center"
    >
      <div
        className="group cursor-pointer flex flex-col gap-3 border-2 border-indigo-300 rounded-md overflow-hidden
        sm:w-full w-[300px] min-h-[550px] sm:hover:scale-105 scale-100 transition duration-100
        "
      >
        <div className="mx-auto max-h-[200px] h-1/2 px-3 py-4 flex justify-center items-center">
          <PhotoLoader isLoading={isImageLoading} backgroundClass="h-full" />
          <img
            onLoad={onImageLoad}
            src={program.logo}
            alt={`Brush ${program.logo}`}
            className={`${isImageLoading ? "hidden" : "flex"} h-full`}
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
              {program.name}
            </h2>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              {icons.map((Icon) => (
                <div className="hover:opacity-60 transition duration-200">
                  <Icon className="text-[26px] sm:text-[20px]" />
                </div>
              ))}
            </div>
          </div>
          <p className="text-[16px] overflow-auto">{program.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramSlide;
