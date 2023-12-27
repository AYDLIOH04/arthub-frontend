"use client";

import React, { useState } from "react";
import { useAddToFavoriteMutation } from "@/store/features/brushes/brushesApi";
import { IBrush } from "@/models";
import BrushItem from "./brush-item";
import BrushPopup from "./brush-popup";
import Pagination from "../../../components/UI/pagination";

import { AnimatePresence } from "framer-motion";

const BrushList = ({
  data,
  currentPage,
  totalPages,
  setCurrentPage,
}: {
  data: IBrush[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}) => {
  const [popupView, setPopupView] = useState(false);
  const [selectBrush, setSelectBrush] = useState<IBrush>({} as IBrush);
  const [addToFavoriteBrush] = useAddToFavoriteMutation();

  const openViewPopup = (brush: IBrush) => {
    setSelectBrush(brush);
    setPopupView(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <div className="flex flex-wrap flex-row justify-center gap-8">
        {data.map((brush, index) => (
          <BrushItem
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
      <AnimatePresence mode="wait">
        {popupView && (
          <BrushPopup
            brush={selectBrush}
            popupView={popupView}
            setPopupView={setPopupView}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default BrushList;
