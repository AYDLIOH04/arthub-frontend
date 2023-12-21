import { getDifficultyIcon, getProgramsIcon } from "@/utils/get-icon";
import { useRouter } from "next/navigation";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { ITutorial } from "@/models";
import useHover from "@/hooks/useHover";
import { getTruncatedText } from "@/utils/get-truncated-text";

const TutorialSlide = ({
  tutorial,
  toggleFavorite,
}: {
  tutorial: ITutorial;
  toggleFavorite: any;
}) => {
  const router = useRouter();
  const [favorite, setFavorite] = useState(true);

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
  const LikeIcon = favorite ? FaHeart : FaRegHeart;

  const onToggleFavorite = (event: any) => {
    event.stopPropagation();
    toggleFavorite({ tutorial });
    setFavorite((current) => !current);
  };

  const onPlayClick = () => {
    router.push(`/tutorials/${tutorial.id}`);
  };

  return (
    <div className="px-3 py-5 flex justify-center">
      <div
        ref={hoverRef}
        onClick={onPlayClick}
        className="cursor-pointer w-[365px] h-[321px] bg-main_purple flex flex-col gap-2 rounded-md p-3 group hover:scale-105 hover:shadow-xl duration-300"
      >
        <div className="rounded-t-md overflow-hidden relative">
          <div>
            <img
              src={tutorial.image}
              width={200}
              height={200}
              alt={tutorial.author}
              className="select-none pointer-events-none w-full"
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
                favorite ? "sm:flex" : "sm:hidden"
              }  group-hover:flex 
              absolute right-0 bottom-0 w-[45px] h-[45px] hover:bg-gray-300 hover:scale-110
              transition duration-200 bg-white rounded-full
              justify-center items-center`}
          >
            <LikeIcon className="text-background" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialSlide;
