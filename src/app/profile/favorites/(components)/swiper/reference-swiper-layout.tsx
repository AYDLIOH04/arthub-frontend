import PrevButton from "./prev-button";
import NextButton from "./next-button";
import { Swiper } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

const ReferenceSwiper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        enabled: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      coverflowEffect={{
        rotate: 5,
        stretch: 10,
        depth: 120,
        modifier: 3,
      }}
      className="pb-[200px]"
    >
      {children}
      <div className="sm:flex hidden min-w-[300px] h-[50px] relative mx-auto justify-center items-center mb-6 gap-4">
        <PrevButton className="relative sm:top-0 xl:left-0 left-0" />
        <div className="swiper-pagination reference-swiper-navigation"></div>
        <NextButton className="relative sm:top-0 xl:right-0 right-0" />
      </div>
    </Swiper>
  );
};

export default ReferenceSwiper;
