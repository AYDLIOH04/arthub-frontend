'use client'

import { useGetProgramsQuery } from "@/store/features/programs/programsApi";
import ProgramItem from "./program-item";
import ProgramsNotFound from "@/components/UI/not-found/programs-notfound";
import ProgramsFetchError from "@/components/UI/error/programs-error";
import ProgramsSkeleton from "@/components/UI/skeletons/programs-skeleton";

const ProgramsList = () => {
  // const { data: programs, isLoading, isError } = useGetProgramsQuery();

  if (true) return <ProgramsSkeleton />;

  // if (isError) return <ProgramsFetchError />;

  // if (!programs || !programs.length) return <ProgramsNotFound />;

  // return (
  //   <ul className="space-y-4">
  //     {programs?.map((program) => (
  //       <ProgramItem key={program.id} program={program} />
  //     ))}
  //   </ul>
  // );
};

export default ProgramsList;
