"use client";

import { useGetUserReferencesQuery } from "@/store/features/user/userApi";
import ReferenceSlide from "./reference-slide";
import { SwiperSlide } from "swiper/react";
import { useAddToFavoriteMutation } from "@/store/features/references/referencesApi";
import ReferenceSwiper from "../swiper/reference-swiper-layout";
import ReferencePopup from "@/app/references/(components)/reference-popup";
import { IReference } from "@/models";
import { useEffect, useState } from "react";
import FavoriteReferencesSkeleton from "@/components/skeletons/favorite-references-skeleton";
import { AnimatePresence } from "framer-motion";
import FavoriteFetchError from "@/components/error/favorite-fetch-error";
import { TbPhotoSquareRounded } from "react-icons/tb";
import FavoriteNotFound from "@/components/not-found/favorite-not-found";

const ReferencesSlider = () => {
  const [popupView, setPopupView] = useState(false);
  const [selectBrush, setSelectBrush] = useState<IReference>({} as IReference);

  const openViewPopup = (reference: IReference) => {
    setSelectBrush(reference);
    setPopupView(true);
  };

  const [toggleFavorite] = useAddToFavoriteMutation();
  const { data, isLoading, isError, error, isSuccess, refetch } =
    useGetUserReferencesQuery();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, []);

  if (isLoading) return <FavoriteReferencesSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return (
        <FavoriteNotFound
          Icon={TbPhotoSquareRounded}
          message="Референсы не найдены"
          add="референс"
          link="/references"
        />
      );
    }
    return <FavoriteFetchError message="Ошибка запроса к референсам" />;
  }

  if (!data || !data?.length)
    return (
      <FavoriteNotFound
        Icon={TbPhotoSquareRounded}
        message="Референсы не найдены"
        add="референс"
        link="/references"
      />
    );

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
