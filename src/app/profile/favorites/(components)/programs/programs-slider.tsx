"use client";

import { useAddToFavoriteMutation } from "@/store/features/programs/programsApi";
import { useGetUserProgramsQuery } from "@/store/features/user/userApi";
import DefaultSwiper from "../swiper/default-swiper-layout";
import ProgramSlide from "./program-slide";
import { SwiperSlide } from "swiper/react";
import FavoriteProgramsSkeleton from "@/components/UI/skeletons/favorite-programs-skeleton";
import FavoriteProgramsNotFound from "@/components/UI/not-found/favorite-programs-notfound";
import FavoriteProgramsError from "@/components/UI/error/favorite-programs-error";

const ProgramsSlider = () => {
  const [toggleFavorite] = useAddToFavoriteMutation();
  const { data, isLoading, isError, error } = useGetUserProgramsQuery();

  if (isLoading) return <FavoriteProgramsSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return <FavoriteProgramsNotFound />;
    }
    return <FavoriteProgramsError />;
  }

  if (!data || !data?.length) return <FavoriteProgramsNotFound />;

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
