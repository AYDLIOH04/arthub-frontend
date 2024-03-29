import PhotoLoader from "@/components/skeletons/photo-loader";
import useCurrentUser from "@/hooks/useCurrentUser";
import { IReference } from "@/models";
import { useAddToFavoriteMutation } from "@/store/features/references/referencesApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

const ReferenceItem = ({
  reference,
  openViewPopup,
}: {
  reference: IReference;
  openViewPopup: any;
}) => {
  const [addToFavorite] = useAddToFavoriteMutation();
  const [isCopy, setIsCopy] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState(
    reference.favorite ? reference.favorite : false
  );

  const router = useRouter();
  const user = useCurrentUser();

  const toggleFavorite = (event: any) => {
    event.stopPropagation();
    if (user.isAuth) {
      setIsFavorite((curr) => !curr);
      addToFavorite({ reference });
    } else {
      router.push("/auth");
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsCopy(false);
    }, 5000);

    return () => clearTimeout(timerId);
  }, [isCopy]);

  const onImageLoad = (event: any) => {
    setIsImageLoading(false);
  };

  const onImageCopy = (event: any) => {
    setIsCopy(true);
    event.stopPropagation();
    navigator.clipboard.writeText(reference.image);
  };

  const LikeIcon = isFavorite ? FaHeart : FaRegHeart;
  const CopyIcon = isCopy ? LuCopyCheck : LuCopy;
  return (
    <div
      onClick={() => openViewPopup(reference)}
      className="md:mx-1 mx-0.5 relative group cursor-pointer sm:min-h-[150px]"
    >
      <PhotoLoader
        isLoading={isImageLoading}
        backgroundClass="h-[400px] bg-gradient-to-br from-main_purple via-second_purple to-main_purple animate-pulse"
      />
      <img
        onLoad={onImageLoad}
        src={reference.image}
        alt={reference.title}
        className={`${
          isImageLoading ? "hidden" : "flex"
        } group-hover:opacity-30 duration-200 select-none w-full`}
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
          className="md:flex hidden justify-center items-center p-2 rounded-md bg-white hover:bg-gray-300 hover:scale-110 duration-200"
        >
          <CopyIcon size={20} className="text-background" />
        </div>
      </div>
      <div
        onClick={toggleFavorite}
        className={`
            cursor-pointer
            flex ${
              isFavorite ? "sm:flex sm:opacity-100" : "sm:hidden"
            }  group-hover:flex 
            absolute sm:top-2 top-1 sm:right-2 right-1 sm:opacity-0 opacity-100 group-hover:opacity-100 duration-200 sm:w-[50px] w-[35px] sm:h-[50px] h-[35px] hover:bg-gray-300 hover:scale-110 bg-white rounded-full justify-center items-center`}
      >
        <LikeIcon className="text-background sm:text-[30px] text-[22px]" />
      </div>
    </div>
  );
};

export default ReferenceItem;
