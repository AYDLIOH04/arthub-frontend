"use client";

import React, { useState } from "react";
import BrushesSkeleton from "../UI/skeletons/brushes-skeleton";
import { useGetBrushesQuery } from "@/store/features/brushes/brushesApi";
import Brush from "./Brush";
import Pagination from "../UI/pagination";
import BrushesNotFound from "../UI/not-found/brushes-notfound";
import BrushesFetchError from "../UI/error/brushes-error";

const Brushes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: brushes, isLoading, isError } = useGetBrushesQuery({
    page: currentPage,
    size: 4,
  });

  const totalPages = 100 ? Math.ceil(100 / 4) : 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <BrushesSkeleton />;

  if (isError) return <BrushesFetchError/>

  if (!brushes) return <BrushesNotFound />;

  return (
    <div>
      <div className="flex flex-wrap flex-row justify-center gap-8 mt-10">
        {brushes?.map((brush, index) => (
          <Brush key={index} brush={brush} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Brushes;
