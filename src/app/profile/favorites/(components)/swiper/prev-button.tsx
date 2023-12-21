import { SlArrowLeft } from "react-icons/sl";
import { useSwiper } from "swiper/react";

const PrevButton = ({ className }: { className?: string }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`md:block hidden xl:-left-16 left-0 absolute top-1/2  text-[30px] z-[101] p-2 rounded-full transition hover:bg-white hover:text-background ${
        className ? className : ""
      }`}
      onClick={() => swiper.slidePrev()}
    >
      <SlArrowLeft />
    </button>
  );
};

export default PrevButton;
