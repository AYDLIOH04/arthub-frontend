"use client";

import { SwiperSlide } from "swiper/react";
import DefaultSwiper from "../swiper/default-swiper-layout";
import { useAddToFavoriteMutation } from "@/store/features/tutorials/tutorialsApi";
import { useGetUserTutorialsQuery } from "@/store/features/user/userApi";
import TutorialSlide from "./tutorial-slide";
import FavoriteTutorialsSkeleton from "@/components/UI/skeletons/favorite-tutorials-skeleton";
import FavoriteTutorialsError from "@/components/UI/error/favorite-tutorials-error";
import FavoriteTutorialsNotFound from "@/components/UI/not-found/favorite-tutorials-notfound";
import { useEffect } from "react";

const TutorialsSlider = () => {
  const [toggleFavorite] = useAddToFavoriteMutation();
  const { data, isLoading, isError, error, isSuccess, refetch } =
    useGetUserTutorialsQuery();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, []);

  if (isLoading) return <FavoriteTutorialsSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return <FavoriteTutorialsNotFound />;
    }
    return <FavoriteTutorialsError />;
  }

  if (!data || !data?.length) return <FavoriteTutorialsNotFound />;

  return (
    <DefaultSwiper countSlides={3}>
      {data.map((tutorial) => (
        <SwiperSlide key={tutorial.id}>
          <TutorialSlide tutorial={tutorial} toggleFavorite={toggleFavorite} />
        </SwiperSlide>
      ))}
    </DefaultSwiper>
  );
};

export default TutorialsSlider;
