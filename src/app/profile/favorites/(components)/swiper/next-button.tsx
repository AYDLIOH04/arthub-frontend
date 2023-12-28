import { SlArrowRight } from "react-icons/sl";
import { useSwiper } from "swiper/react";

const NextButton = ({ className }: { className?: string }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`md:block hidden xl:-right-16 right-0 absolute top-1/2 text-[30px] z-[99] p-2 rounded-full transition hover:bg-white hover:text-background ${
        className ? className : ""
      }`}
      onClick={() => swiper.slideNext()}
    >
      <SlArrowRight />
    </button>
  );
};

export default NextButton;
