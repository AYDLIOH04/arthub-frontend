import Link from "next/link";
import { useEffect, useRef } from "react";
import { IBrush } from "@/models/IBrush";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { useClickOutside } from "@/hooks/useClickOutside";
import useEscapeKeydown from "@/hooks/useEscapeKeydown";

const BrushPopup = ({
  brush,
  popupView,
  setPopupView,
}: {
  brush: IBrush;
  popupView: boolean;
  setPopupView: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const onClosePopup = () => {
    document.body.style.overflow = "auto";
    setPopupView(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useClickOutside(onClosePopup, ref, popupView);
  useEscapeKeydown(onClosePopup, popupView);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="
          fixed top-0 left-0 z-[1000]
          h-screen w-screen
          bg-black bg-opacity-50
          backdrop-blur-sm 
          flex justify-center items-center 
          "
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5, translateY: -500 }}
        animate={{ opacity: 1, scale: 1, translateY: 0 }}
        exit={{ opacity: 0, scale: 0.5, translateY: -500 }}
        transition={{ duration: 0.3 }}
        className="border-2 border-indigo-300 rounded-md bg-main_purple px-4 py-4 mx-1 w-full sm:w-[500px] min-h-[450px] relative"
      >
        <div
          className="
              absolute top-2 right-2
              bg-white rounded-full
              w-[50px] h-[50px] z-10
              flex justify-center items-center
              cursor-pointer hover:opacity-75 transition hover:scale-110
              "
          onClick={onClosePopup}
        >
          <RxCross2 className="text-main_purple text-3xl" />
        </div>
        <div>
          <img
            src={brush.image}
            alt={`Brush ${brush.image}`}
            className="sm:h-[300px] h-[280px] mx-auto rounded-md drop-shadow-xl"
          />
        </div>
        <div className="flex flex-col items-center mt-4 gap-3">
          <h2 className="text-[20px] font-bold pb-1 border-b-2 border-indigo-300">
            {brush.title}
          </h2>
          <p className="text-center text-[20px] overflow-y-auto h-[180px]">
            {brush.description}
          </p>
          <div className="flex flex-row gap-4 justify-around w-full text-[22px] text-white text-center">
            <Link
              href={`/programs/${brush.program.toLowerCase()}`}
              className="bg-second_purple px-3 py-1 rounded-[3px] hover:opacity-70 transition w-1/2"
            >
              <span className="font-bold">{brush.program}</span>
            </Link>
            <a
              href={brush.link}
              target="blank"
              className="bg-second_purple px-3 py-1 rounded-[3px] hover:opacity-70 transition w-1/2"
            >
              Скачать
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BrushPopup;
