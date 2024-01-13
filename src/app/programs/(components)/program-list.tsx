"use client";

import {
  useAddToFavoriteMutation,
  useGetProgramsQuery,
} from "@/store/features/programs/programsApi";
import ProgramItem from "./program-item";
import ProgramsSkeleton from "@/components/skeletons/programs-skeleton";
import { getCookieData } from "@/utils";
import FetchError from "@/components/error/fetch-error";
import { IoLogoAppleAr } from "react-icons/io5";
import NotFoundError from "@/components/not-found/not-found";

const ProgramsList = ({
  search,
  select,
}: {
  search: string;
  select: string;
}) => {
  const [addToFavoriteProgram] = useAddToFavoriteMutation();
  const { data, isLoading, isError, error } = useGetProgramsQuery({
    search,
    system: select,
    like: getCookieData("auth-data").token ? true : false,
  });

  if (isLoading) return <ProgramsSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return (
        <NotFoundError Icon={IoLogoAppleAr} message="Программы не найдены" />
      );
    }
    return <FetchError message="Ошибка запроса к программам" />;
  }

  if (!data || !data?.length)
    return (
      <NotFoundError Icon={IoLogoAppleAr} message="Программы не найдены" />
    );

  return (
    <ul className="space-y-4">
      {data?.map((program) => (
        <ProgramItem
          key={program.id}
          program={program}
          addToFavorite={addToFavoriteProgram}
        />
      ))}
    </ul>
  );
};

export default ProgramsList;
