"use client";

import React, { useState } from "react";
import { useGetBrushesQuery } from "@/store/features/brushes/brushesApi";
import { IBrush } from "@/models";
import Brush from "./Brush";
import BrushPopup from "./brush-popup";
import Pagination from "../../components/UI/pagination";
import BrushesSkeleton from "../../components/UI/skeletons/brushes-skeleton";
import BrushesNotFound from "../../components/UI/not-found/brushes-notfound";
import BrushesFetchError from "../../components/UI/error/brushes-error";

const data: IBrush[] = [
  {
    id: 1,
    title: "Кисть первая",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas fuga aspernatur cumque doloribus praesentium tenetur. Officiis exercitationem nulla pariatur, voluptatem voluptates alias ducimus fuga, id voluptas, distinctio nobis ullam.",
    program: "Krita",
    link: "https://bebra.com/",
    image:
      "https://avatars.mds.yandex.net/i?id=3a7194bc88f5fef768a3f402f548e366c80a8f46-9069085-images-thumbs&ref=rim&n=33&w=188&h=200",
  },
  {
    id: 2,
    title: "Главная кисть",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas fuga aspernatur cumque doloribus praesentium tenetur. Officiis exercitationem nulla pariatur, voluptatem voluptates alias ducimus fuga, id voluptas, distinctio nobis ullam.",
    program: "Photoshop",
    link: "https://bebra.com/",
    image:
      "https://avatars.mds.yandex.net/i?id=3a7194bc88f5fef768a3f402f548e366c80a8f46-9069085-images-thumbs&ref=rim&n=33&w=188&h=200",
  },
  {
    id: 3,
    title: "Самая крутая кисть",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas fuga aspernatur cumque doloribus praesentium tenetur. Officiis exercitationem nulla pariatur, voluptatem voluptates alias ducimus fuga, id voluptas, distinctio nobis ullam.",
    program: "Figma",
    link: "https://bebra.com/",
    image:
      "https://avatars.mds.yandex.net/i?id=3a7194bc88f5fef768a3f402f548e366c80a8f46-9069085-images-thumbs&ref=rim&n=33&w=188&h=200",
  },
  {
    id: 4,
    title: "Кисть 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas fuga aspernatur cumque doloribus praesentium tenetur. Officiis exercitationem nulla pariatur, voluptatem voluptates alias ducimus fuga, id voluptas, distinctio nobis ullam.",
    program: "Photoshop",
    link: "https://bebra.com/",
    image:
      "https://avatars.mds.yandex.net/i?id=3a7194bc88f5fef768a3f402f548e366c80a8f46-9069085-images-thumbs&ref=rim&n=33&w=188&h=200",
  },
];

const Brushes = () => {
  const [popupView, setPopupView] = useState(false);
  const [selectBrush, setSelectBrush] = useState<IBrush>({} as IBrush);

  const openViewPopup = (brush: IBrush) => {
    setSelectBrush(brush);
    setPopupView(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: brushes,
    isLoading,
    isError,
  } = useGetBrushesQuery({
    page: currentPage,
    size: 4,
  });

  const totalPages = 100 ? Math.ceil(100 / 4) : 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // if (isLoading) return <BrushesSkeleton />;

  // if (isError) return <BrushesFetchError />;

  // if (!brushes) return <BrushesNotFound />;

  return (
    <div>
      <div className="flex flex-wrap flex-row justify-center gap-8 mt-10">
        {data?.map((brush, index) => (
          <Brush key={index} brush={brush} openViewPopup={openViewPopup} />
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
