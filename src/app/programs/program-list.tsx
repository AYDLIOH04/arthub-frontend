"use client";

import { useGetProgramsQuery } from "@/store/features/programs/programsApi";
import ProgramItem from "./program-item";
import ProgramsNotFound from "@/components/UI/not-found/programs-notfound";
import ProgramsFetchError from "@/components/UI/error/programs-error";
import ProgramsSkeleton from "@/components/UI/skeletons/programs-skeleton";

const ProgramsList = ({
  search,
  select,
}: {
  search: string;
  select: string;
}) => {
  const {
    data: programs,
    isLoading,
    isError,
    error
  } = useGetProgramsQuery({ search, system: select });

  if (isLoading) return <ProgramsSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return <ProgramsNotFound />;
    }
    return <ProgramsFetchError />;
  }

  if (!programs || !programs?.length) return <ProgramsNotFound />;

  return (
    <ul className="space-y-4">
      {programs?.map((program) => (
        <ProgramItem key={program.id} program={program} />
      ))}
    </ul>
  );
};

export default ProgramsList;
