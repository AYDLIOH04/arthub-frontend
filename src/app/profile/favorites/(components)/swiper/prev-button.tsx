import { SlArrowLeft } from "react-icons/sl";
import { useSwiper } from "swiper/react";

const PrevButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className="md:block hidden xl:-left-16 left-0 absolute top-1/2  text-[30px] z-[11] p-2 rounded-full transition hover:bg-white hover:text-background"
      onClick={() => swiper.slidePrev()}
    >
      <SlArrowLeft />
    </button>
  );
};

export default PrevButton;
