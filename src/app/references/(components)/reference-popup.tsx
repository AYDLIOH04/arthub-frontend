import { useClickOutside } from "@/hooks/useClickOutside";
import useEscapeKeydown from "@/hooks/useEscapeKeydown";
import { IReference } from "@/models";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { RxCross2 } from "react-icons/rx";

const ReferencePopup = ({
  reference,
  popupView,
  setPopupView,
}: {
  reference: IReference;
  popupView: any;
  setPopupView: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(() => setPopupView(false), ref, popupView);
  useEscapeKeydown(() => setPopupView(false), popupView);

  return (
    <AnimatePresence mode="wait">
      {popupView && (
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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <img src={reference.image} alt={reference.title} className="sm:max-h-[95vh] sm:max-w-[95vw]"/>
            <div
              className="
              absolute top-2 right-2
              bg-white rounded-full
              sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] z-10
              flex justify-center items-center
              cursor-pointer hover:opacity-75 transition hover:scale-110
              "
              onClick={() => setPopupView(false)}
            >
              <RxCross2 className="text-main_purple text-3xl" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReferencePopup;
