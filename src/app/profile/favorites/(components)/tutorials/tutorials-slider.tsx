"use client";

import { SwiperSlide } from "swiper/react";
import DefaultSwiper from "../swiper/default-swiper-layout";
import { useAddToFavoriteMutation } from "@/store/features/tutorials/tutorialsApi";
import { useGetUserTutorialsQuery } from "@/store/features/user/userApi";
import TutorialSlide from "./tutorial-slide";
import FavoriteTutorialsSkeleton from "@/components/skeletons/favorite-tutorials-skeleton";
import { useEffect } from "react";
import FavoriteFetchError from "@/components/error/favorite-fetch-error";
import { PiVideoFill } from "react-icons/pi";
import FavoriteNotFound from "@/components/not-found/favorite-not-found";

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
      return (
        <FavoriteNotFound
          Icon={PiVideoFill}
          message="Туториалы не найдены"
          add="туториал"
          link="/tutorials"
        />
      );
    }
    return <FavoriteFetchError message="Ошибка запроса к туториалам" />;
  }

  if (!data || !data?.length)
    return (
      <FavoriteNotFound
        Icon={PiVideoFill}
        message="Туториалы не найдены"
        add="туториал"
        link="/tutorials"
      />
    );

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
