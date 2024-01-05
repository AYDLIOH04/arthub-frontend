"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import usePageEnded from "@/hooks/usePageEnded";
import useScrollOffset from "@/hooks/useScrollOffset";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const pathname = usePathname();
  const SM = useMediaQuery("(max-width: 768px)");
  const scrolled = useScrollOffset(80);
  const ended = usePageEnded();

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
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, scale: { duration: 0.2 } }}
          onClick={onScrollButtonClick}
          className={`bg-white z-[101] cursor-pointer fixed ${
            ended
              ? `${
                  pathname === "/"
                    ? "bottom-32"
                    : `${SM ? "bottom-40" : "bottom-44"}`
                }`
              : "bottom-7"
          } right-7 rounded-full duration-200 ease-out p-3 hover:bg-gray-300`}
        >
          <FaArrowUp className="text-background sm:text-[35px] text-[25px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollButton;
