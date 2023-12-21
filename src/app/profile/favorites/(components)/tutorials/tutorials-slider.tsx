"use client";

import { SwiperSlide } from "swiper/react";
import DefaultSwiper from "../swiper/default-swiper-layout";
import { useAddToFavoriteMutation } from "@/store/features/tutorials/tutorialsApi";
import { useGetUserTutorialsQuery } from "@/store/features/user/userApi";
import TutorialSlide from "./tutorial-slide";

const TutorialsSlider = () => {
  const [toggleFavorite] = useAddToFavoriteMutation();
  const { data, isLoading, isError, error } = useGetUserTutorialsQuery();

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return <h2>Not Found</h2>;
    }
    return <h2>Fetch Error</h2>;
  }

  if (!data || !data?.length) return <h2>Not Found</h2>;

  return (
    <DefaultSwiper countSlides={3}>
      {data.map((tutorial) => (
        <SwiperSlide key={tutorial.id}>
          <TutorialSlide tutorial={tutorial} toggleFavorite={() => {}} />
        </SwiperSlide>
      ))}
    </DefaultSwiper>
  );
};

export default TutorialsSlider;
