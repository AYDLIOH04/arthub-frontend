"use client";

import { useGetUserReferencesQuery } from "@/store/features/user/userApi";
import DefaultSwiper from "../swiper/default-swiper-layout";
import ReferenceSlide from "./reference-slide";
import { SwiperSlide } from "swiper/react";
import { useAddToFavoriteMutation } from "@/store/features/references/referencesApi";

const ReferencesSlider = () => {
  const [addToFavoriteReference] = useAddToFavoriteMutation();
  const { data, isLoading, isError, error } = useGetUserReferencesQuery();

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return <h2>Not Found</h2>;
    }
    return <h2>Fetch Error</h2>;
  }

  if (!data || !data?.length) return <h2>Not Found</h2>;

  return (
    <div className="mt-5 relative">
      <DefaultSwiper>
        {data.map((reference) => (
          <SwiperSlide key={reference.id}>
            <ReferenceSlide reference={reference} addToFavorite={addToFavoriteReference} />
          </SwiperSlide>
        ))}
      </DefaultSwiper>
    </div>
  );
};

export default ReferencesSlider;
