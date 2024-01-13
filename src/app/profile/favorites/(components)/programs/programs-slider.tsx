"use client";

import { useAddToFavoriteMutation } from "@/store/features/programs/programsApi";
import { useGetUserProgramsQuery } from "@/store/features/user/userApi";
import DefaultSwiper from "../swiper/default-swiper-layout";
import ProgramSlide from "./program-slide";
import { SwiperSlide } from "swiper/react";
import FavoriteProgramsSkeleton from "@/components/skeletons/favorite-programs-skeleton";
import { useEffect } from "react";
import FavoriteFetchError from "@/components/error/favorite-fetch-error";
import { IoLogoAppleAr } from "react-icons/io5";
import FavoriteNotFound from "@/components/not-found/favorite-not-found";

const ProgramsSlider = () => {
  const [toggleFavorite] = useAddToFavoriteMutation();
  const { data, isLoading, isError, error, isSuccess, refetch } =
    useGetUserProgramsQuery();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, []);

  if (isLoading) return <FavoriteProgramsSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return (
        <FavoriteNotFound
          Icon={IoLogoAppleAr}
          message="Программы не найдены"
          add="программу"
          link="/programs"
        />
      );
    }
    return <FavoriteFetchError message="Ошибка запроса к программам" />;
  }

  if (!data || !data?.length)
    return (
      <FavoriteNotFound
        Icon={IoLogoAppleAr}
        message="Программы не найдены"
        add="программу"
        link="/programs"
      />
    );

  return (
    <DefaultSwiper>
      {data.map((program) => (
        <SwiperSlide key={program.id}>
          <ProgramSlide program={program} toggleFavorite={toggleFavorite} />
        </SwiperSlide>
      ))}
    </DefaultSwiper>
  );
};

export default ProgramsSlider;
