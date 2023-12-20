"use client";

import { IoIosArrowUp } from "react-icons/io";
import TutorialSkeleton from "@/components/UI/skeletons/tutorial-skeleton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useAddToFavoriteMutation, useGetTutorialQuery } from "@/store/features/tutorials/tutorialsApi";
import { getDifficultyIcon } from "@/utils/get-icon";
import { notFound, useRouter } from "next/navigation";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import getCookieData from "@/utils/get-cookie";

const TutorialPage = ({ tutorialId }: { tutorialId: string }) => {
  const [isOpenDesc, setIsOpenDesc] = useState(false);
  const router = useRouter();
  const user = useCurrentUser();
  const [addToFavoriteProgram] = useAddToFavoriteMutation(); 
  const {
    data: tutorial,
    isLoading,
    isError,
    error,
  } = useGetTutorialQuery({
    id: tutorialId,
    like: getCookieData("auth-data").token ? true : false,
  });

  if (isLoading) return <TutorialSkeleton />;

  if (isError || !tutorial) {
    notFound();
  }

  const toggleFavorite = (event: any) => {
    event.stopPropagation();
    if (user.isAuth) {
      addToFavoriteProgram({tutorial})
    } else {
      router.push("/auth");
    }
  };

  const toggleDescription = () => {
    setIsOpenDesc((current) => !current);
  };

  const Icon = getDifficultyIcon(tutorial.difficulty);
  const LikeIcon = tutorial.favorite ? FaHeart : FaRegHeart;

  return (
    <div className="flex flex-col items-center sm:max-w-[1000px] w-full sm:mx-auto mx-0 px-3">
      <iframe
        className="w-full sm:h-[558px] h-[250px] rounded-md"
        allowFullScreen={true}
        src={tutorial.link}
      />
      <div className="flex flex-row justify-between items-center w-full border-b-2 border-[#8F81B5] py-[18px]">
        <div className="flex flex-row gap-3 items-center">
          <Icon size={30} />
          <h2 className="sm:text-[28px] text-[24px]">{tutorial.title}</h2>
        </div>
        <LikeIcon
          onClick={toggleFavorite}
          size={30}
          className="cursor-pointer hover:opacity-60 transition"
        />
      </div>
      <div className="flex flex-row justify-between items-center w-full my-1">
        <p className="text-[#8F81B5] sm:text-[24px] text-[18px]">
          Автор: {tutorial.author}
        </p>
        <button
          className="flex flex-row items-center gap-1 text-[22px] hover:opacity-75"
          onClick={toggleDescription}
        >
          <p>Описание</p>
          <IoIosArrowUp
            size={22}
            className={`${
              isOpenDesc ? "-rotate-180" : "rotate-0"
            } duration-300`}
          />
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isOpenDesc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-page_elem_bg rounded-md py-4 px-6 relative"
          >
            <p className="sm:text-[20px] text-[18px] font-thin mb-4">
              {tutorial.description}
            </p>
            <button
              onClick={toggleDescription}
              className="absolute bottom-2 right-2 hover:underline hover:text-hover"
            >
              Свернуть
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TutorialPage;
