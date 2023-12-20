import PrevButton from "./prev-button";
import NextButton from "./next-button";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

const DefaultSwiper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      breakpoints={{
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      }}
      pagination={{ clickable: true }}
    >
      <PrevButton />
      {children}
      <NextButton />
    </Swiper>
  );
};

export default DefaultSwiper;