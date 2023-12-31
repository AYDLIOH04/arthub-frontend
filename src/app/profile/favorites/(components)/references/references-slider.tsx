"use client";

import { useGetUserReferencesQuery } from "@/store/features/user/userApi";
import ReferenceSlide from "./reference-slide";
import { SwiperSlide } from "swiper/react";
import { useAddToFavoriteMutation } from "@/store/features/references/referencesApi";
import ReferenceSwiper from "../swiper/reference-swiper-layout";
import ReferencePopup from "@/app/references/(components)/reference-popup";
import { IReference } from "@/models";
import { useEffect, useState } from "react";
import FavoriteReferencesSkeleton from "@/components/UI/skeletons/favorite-references-skeleton";
import FavoriteReferencesNotFound from "@/components/UI/not-found/favorite-references-notfound";
import FavoriteReferencesError from "@/components/UI/error/favorite-references-error";
import { AnimatePresence } from "framer-motion";

const ReferencesSlider = () => {
  const [popupView, setPopupView] = useState(false);
  const [selectBrush, setSelectBrush] = useState<IReference>({} as IReference);

  const openViewPopup = (reference: IReference) => {
    setSelectBrush(reference);
    setPopupView(true);
  };

  const [toggleFavorite] = useAddToFavoriteMutation();
  const { data, isLoading, isError, error, isSuccess, refetch } = useGetUserReferencesQuery();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [])

  if (isLoading) return <FavoriteReferencesSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return <FavoriteReferencesNotFound />;
    }
    return <FavoriteReferencesError />;
  }

  if (!data || !data?.length) return <FavoriteReferencesNotFound />;

  return (
    <>
      <ReferenceSwiper>
        {data.map((reference) => (
          <SwiperSlide key={reference.id} className="my-auto">
            <ReferenceSlide
              reference={reference}
              toggleFavorite={toggleFavorite}
              openViewPopup={openViewPopup}
            />
          </SwiperSlide>
        ))}
      </ReferenceSwiper>
      <AnimatePresence mode="wait">
        {popupView && (
          <ReferencePopup
          reference={selectBrush}
          popupView={popupView}
          setPopupView={setPopupView}
        />
        )}
      </AnimatePresence>
    </>
  );
};

export default ReferencesSlider;
