"use client";

import useScrollOffset from "@/hooks/useScrollOffset";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const scrolled = useScrollOffset(80);

  const onScrollButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence mode="wait">
      {scrolled && (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.4 }}
          onClick={onScrollButtonClick}
          className="bg-white z-[101] cursor-pointer fixed bottom-7 right-7 rounded-full duration-200 ease-out p-3 hover:bg-opacity-75"
        >
          <FaArrowUp className="text-background sm:text-[40px] text-[30px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollButton;
