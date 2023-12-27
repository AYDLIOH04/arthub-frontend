import PhotoLoader from "@/components/UI/skeletons/photo-loader";
import useCurrentUser from "@/hooks/useCurrentUser";
import useHover from "@/hooks/useHover";
import { ITutorial } from "@/models";
import { getDifficultyIcon } from "@/utils/get-icon";
import { getTruncatedText } from "@/utils/get-truncated-text";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const TutorialItem = ({
  tutorial,
  addToFavorite,
}: {
  tutorial: ITutorial;
  addToFavorite: any;
}) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const user = useCurrentUser();
  const router = useRouter();

  const [isPlaying, setIsPlaying] = useState(false);
  const [hoverRef, isHovered] = useHover(
    () => {
      setTimeout(() => setIsPlaying(true), 300);
    },
    () => {
      setTimeout(() => setIsPlaying(false), 300);
    }
  );

  const Icon = getDifficultyIcon(tutorial.difficulty);
  const LikeIcon = tutorial.favorite ? FaHeart : FaRegHeart;

  const onToggleFavorite = (event: any) => {
    event.stopPropagation();
    if (user.isAuth) {
      addToFavorite({ tutorial });
    } else {
      router.push("/auth");
    }
  };

  const onPlayClick = () => {
    router.push(`/tutorials/${tutorial.id}`);
  };

  const onImageLoad = (event: any) => {
    setIsImageLoading(false);
  };

  return (
    <div
      ref={hoverRef}
      onClick={onPlayClick}
      className="cursor-pointer min-w-[365px] max-w-[365px] h-[321px] bg-main_purple flex flex-col gap-2 rounded-md p-3 group sm:hover:scale-105 sm:hover:shadow-xl duration-300"
    >
      <div className="rounded-t-md overflow-hidden relative">
        <div>
          <PhotoLoader isLoading={isImageLoading} backgroundClass="w-full h-[200px]"/>
          <img
            onLoad={onImageLoad}
            src={tutorial.image}
            width={200}
            height={200}
            alt={tutorial.author}
            className={`${
              isImageLoading ? "hidden" : "flex"
            } select-none pointer-events-none w-full`}
          />  
          <p className="group-hover:opacity-0 duration-300 absolute bottom-0 right-0 bg-main_purple pl-1 rounded-tl-md">
            {tutorial.duration}
          </p>
        </div>
        {isPlaying && (
          <iframe
            className="absolute top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 duration-300 z-1"
            src={`${tutorial.link}?autoplay=1&mute=1&enablejsapi=1`}
          />
        )}
      </div>
      <div className="pb-1 border-b-2 border-[#8F81B5]">
        <div className="flex flex-row justify-between items-center">
          <p className="text-[20px] hover:animate-pulse whitespace-nowrap overflow-hidden">
            {getTruncatedText(tutorial.title, 30)}
          </p>
          <Icon className="text-[22px] self-start" />
        </div>
      </div>
      <div className="flex flex-row justify-between relative">
        <p className="text-[#8F81B5] text-[20px]">Автор: {tutorial.author}</p>
        <div
          onClick={onToggleFavorite}
          className={`
            cursor-pointer
            flex ${
              tutorial.favorite ? "sm:flex" : "sm:hidden"
            }  group-hover:flex 
            absolute right-0 bottom-0 w-[45px] h-[45px] hover:bg-gray-300 hover:scale-110
            transition duration-200 bg-white rounded-full
            justify-center items-center`}
        >
          <LikeIcon className="text-background" size={28} />
        </div>
      </div>
    </div>
  );
};

export default TutorialItem;
