"use client";

import { SwiperSlide } from "swiper/react";
import DefaultSwiper from "../swiper/default-swiper-layout";
import { useAddToFavoriteMutation } from "@/store/features/brushes/brushesApi";
import { useGetUserBrushesQuery } from "@/store/features/user/userApi";
import BrushSlide from "./brush-slide";

const BrushesSlider = () => {
  const [toggleFavorite] = useAddToFavoriteMutation();
  const { data, isLoading, isError, error } = useGetUserBrushesQuery();

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return <h2>Not Found</h2>;
    }
    return <h2>Fetch Error</h2>;
  }

  if (!data || !data?.length) return <h2>Not Found</h2>;

  return (
    <DefaultSwiper>
      {data.map((brush) => (
        <SwiperSlide key={brush.id}>
          <BrushSlide brush={brush} toggleFavorite={toggleFavorite} />
        </SwiperSlide>
      ))}
    </DefaultSwiper>
  );
};

export default BrushesSlider;
