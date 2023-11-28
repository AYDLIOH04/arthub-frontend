"use client";

import React, { useState } from "react";
import {
  useAddToFavoriteMutation,
  useGetBrushesQuery,
} from "@/store/features/brushes/brushesApi";
import { IBrush } from "@/models";
import Brush from "./Brush";
import BrushPopup from "./brush-popup";
import Pagination from "../../components/UI/pagination";
import BrushesSkeleton from "../../components/UI/skeletons/brushes-skeleton";
import BrushesNotFound from "../../components/UI/not-found/brushes-notfound";
import BrushesFetchError from "../../components/UI/error/brushes-error";
import getCookieData from "@/utils/get-cookie";

const Brushes = ({
  search,
  select,
  currentPage,
  setCurrentPage,
}: {
  search: string;
  select: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) => {
  const [popupView, setPopupView] = useState(false);
  const [selectBrush, setSelectBrush] = useState<IBrush>({} as IBrush);

  const openViewPopup = (brush: IBrush) => {
    setSelectBrush(brush);
    setPopupView(true);
  };

  const [addToFavoriteBrush] = useAddToFavoriteMutation();
  const { data, isLoading, isError, error } = useGetBrushesQuery({
    search,
    program: select,
    page: currentPage,
    size: 6,
    like: getCookieData("auth-data").token ? true : false,
  });

  const totalCountHeader = data?.totalCount;
  const totalPages = totalCountHeader ? Math.ceil(totalCountHeader / 6) : 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <BrushesSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return <BrushesNotFound />;
    }
    return <BrushesFetchError />;
  }

  if (!data || !data?.response.length) return <BrushesNotFound />;

  return (
    <div>
      <div className="flex flex-wrap flex-row justify-center gap-8 mt-10">
        {data.response?.map((brush, index) => (
          <Brush
            key={index}
            brush={brush}
            openViewPopup={openViewPopup}
            addToFavorite={addToFavoriteBrush}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <BrushPopup
        brush={selectBrush}
        popupView={popupView}
        setPopupView={setPopupView}
      />
    </div>
  );
};

export default Brushes;
