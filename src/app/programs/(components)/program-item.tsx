import PhotoLoader from "@/components/skeletons/photo-loader";
import useCurrentUser from "@/hooks/useCurrentUser";
import { IProgram } from "@/models";
import { getSystemsIcon } from "@/utils/icon-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProgramItem = ({
  program,
  addToFavorite,
}: {
  program: IProgram;
  addToFavorite: any;
}) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const user = useCurrentUser();
  const router = useRouter();
  const LikeIcon = program.favorite ? FaHeart : FaRegHeart;

  const toggleFavorite = (event: any) => {
    event.stopPropagation();
    if (user.isAuth) {
      addToFavorite({ program });
    } else {
      router.push("/auth");
    }
  };

  const onImageLoad = (event: any) => {
    setIsImageLoading(false);
  };

  return (
    <li
      className="
      group sm:hover:scale-[1.03] sm:hover:shadow-xl scale-100
      flex sm:flex-row flex-col gap-2
      border-2 border-second_purple
      rounded-md overflow-hidden
      transition duration-100
    "
    >
      <div className="sm:w-1/6 w-full flex justify-center items-center relative">
        <PhotoLoader
          isLoading={isImageLoading}
          backgroundClass="sm:h-auto h-[300px] w-full"
        />
        <img
          onLoad={onImageLoad}
          src={program.logo}
          width={200}
          height={200}
          alt={program.name}
          className={`${
            isImageLoading ? "hidden" : "flex"
          } select-none pointer-events-none p-3 w-full`}
        />
        <div
          onClick={toggleFavorite}
          className={`
            cursor-pointer
            flex ${program.favorite ? "sm:flex" : "sm:hidden"} group-hover:flex
            sm:left-2 absolute right-2 top-2 w-[50px] h-[50px]
            transition duration-200 hover:bg-gray-200 hover:scale-110
            bg-white rounded-full
            justify-center items-center`}
        >
          <LikeIcon className="text-background" size={30} />
        </div>
      </div>
      <div className="bg-main_purple sm:w-5/6 w-full px-4 py-3">
        <h2 className="border-b-2 border-[#8F81B5] inline text-[24px] pb-0.5">
          {program.name}
        </h2>
        <div className="mt-2">
          <p className="font-thin text-[18px]">{program.description}</p>
          <div className="mt-2 flex justify-between items-center">
            <Link
              href={`/programs/${program.name.toLowerCase()}`}
              className="font-thin text-[24px] border-2 border-white rounded-[5px] px-2 hover:bg-hover hover:border-hover transition"
            >
              Подробнее
            </Link>
            <div className="flex flex-row gap-2 items-center text-[24px]">
              {program.systems.map((os, index) => {
                const Icon = getSystemsIcon(os);
                return (
                  <div
                    key={index}
                    className="hover:opacity-60 duration-200 transition"
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProgramItem;
