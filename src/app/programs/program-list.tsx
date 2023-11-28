"use client";

import {
  useAddToFavoriteMutation,
  useGetProgramsQuery,
} from "@/store/features/programs/programsApi";
import ProgramItem from "./program-item";
import ProgramsNotFound from "@/components/UI/not-found/programs-notfound";
import ProgramsFetchError from "@/components/UI/error/programs-error";
import ProgramsSkeleton from "@/components/UI/skeletons/programs-skeleton";
import getCookieData from "@/utils/get-cookie";

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
      return <ProgramsNotFound />;
    }
    return <ProgramsFetchError />;
  }

  if (!data || !data?.length) return <ProgramsNotFound />;

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
