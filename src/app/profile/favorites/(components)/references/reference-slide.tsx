import { IReference } from "@/models";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { LuCopyCheck, LuCopy } from "react-icons/lu";

const ReferenceSlide = ({
  reference,
  toggleFavorite,
  openViewPopup,
}: {
  reference: IReference;
  toggleFavorite: any;
  openViewPopup: any;
}) => {
  const [isCopy, setIsCopy] = useState(false);
  const [favorite, setFavorite] = useState(true);

  const onToggleFavorite = (event: any) => {
    event.stopPropagation();
    toggleFavorite({ reference });
    setFavorite((current) => !current);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsCopy(false);
    }, 5000);

    return () => clearTimeout(timerId);
  }, [isCopy]);

  const onImageCopy = (event: any) => {
    setIsCopy(true);
    event.stopPropagation();
    navigator.clipboard.writeText(reference.image);
  };

  const LikeIcon = favorite ? FaHeart : FaRegHeart;
  const CopyIcon = isCopy ? LuCopyCheck : LuCopy;
  return (
    <div
      onClick={() => openViewPopup(reference)}
      className="flex justify-center items-center bg-opacity-0"
    >
      <div className="relative group bg-background w-full">
        <img
          src={reference.image}
          alt={reference.title}
          className="group-hover:opacity-30 duration-200 select-none w-full"
        />
        <div className="absolute sm:bottom-2 bottom-0 sm:right-2 right-0 opacity-0 group-hover:opacity-100 sm:text-[16px] md:text-[20px] xl:text-[22px] text-[12px] duration-200 md:flex md:flex-row md:items-center md:gap-2">
        <div>
          {reference.hashtag
            .split(" ")
            .map((hastag) => `#${hastag}`)
            .join(" ")}
        </div>
        <div
          onClick={onImageCopy}
          className="md:flex hidden justify-center items-center p-2 rounded-md bg-white hover:bg-gray-300 hover:scale-110 duration-200 cursor-pointer"
        >
          <CopyIcon size={20} className="text-background" />
        </div>
      </div>
        <div
          onClick={onToggleFavorite}
          className={`
              cursor-pointer
              flex ${
                reference.favorite ? "sm:flex sm:opacity-100" : "sm:hidden"
              }  group-hover:flex 
              absolute sm:top-2 top-1 sm:right-2 right-1 sm:opacity-0 opacity-100 group-hover:opacity-100 duration-200 w-[50px] h-[50px] hover:bg-gray-300 hover:scale-110 bg-white rounded-full justify-center items-center`}
        >
          <LikeIcon className="text-background text-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default ReferenceSlide;
