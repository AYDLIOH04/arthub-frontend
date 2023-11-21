"use client";

import { useGetBrushesQuery } from "@/store/features/brushes/brushesApi";
import BrushesSkeleton from "../UI/skeletons/brushes-skeletons";
import Brush from "./Brush";

import { brushFakeData } from "@/data/temp-data";

const Brushes = () => {
  const { data: brushes, isLoading } = useGetBrushesQuery({});

  if (isLoading) return <BrushesSkeleton />;

  return (
    <div className="flex flex-wrap flex-row justify-center gap-8 mt-10">
      {brushFakeData?.map((brush, index) => (
        <Brush key={index} brush={brush} />
      ))}
    </div>
  );
};

export default Brushes;
