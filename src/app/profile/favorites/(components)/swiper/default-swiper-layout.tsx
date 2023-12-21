import PrevButton from "./prev-button";
import NextButton from "./next-button";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

const DefaultSwiper = ({
  children,
  countSlides = 4,
}: {
  children: React.ReactNode;
  countSlides?: number;
}) => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      breakpoints={{
        576: {
          slidesPerView: Math.max(countSlides - 3, 1),
        },
        768: {
          slidesPerView: Math.max(countSlides - 2, 1),
        },
        1024: {
          slidesPerView: Math.max(countSlides - 1, 1),
        },
        1400: {
          slidesPerView: countSlides,
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
