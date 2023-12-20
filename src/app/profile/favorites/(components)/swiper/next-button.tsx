import { SlArrowRight } from "react-icons/sl";
import { useSwiper } from "swiper/react";

const NextButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className="md:block hidden xl:-right-16 right-0 absolute top-1/2 text-[30px] z-[11] p-2 rounded-full transition hover:bg-white hover:text-background"
      onClick={() => swiper.slideNext()}
    >
      <SlArrowRight />
    </button>
  );
};

export default NextButton;
