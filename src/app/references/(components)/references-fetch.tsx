import { useGetReferencesQuery } from "@/store/features/references/referencesApi";
import getCookieData from "@/utils/get-cookie";
import ReferencesNotFound from "@/components/UI/not-found/references-notfound";
import ReferencesFetchError from "@/components/UI/error/references-error";
import ReferencesSkeleton from "@/components/UI/skeletons/references-skeleton";
import ReferenceList from "./reference-list";
import shuffle from "@/utils/shuffle";

const References = ({ select }: { select: string }) => {
  const { data, isLoading, isError, error } = useGetReferencesQuery({
    tag: select,
    like: getCookieData("auth-data").token ? true : false,
  });

  if (isLoading) return <ReferencesSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return <ReferencesNotFound />;
    }
    return <ReferencesFetchError />;
  }

  if (!data || !data?.response.length) return <ReferencesNotFound />;
  const tempData = shuffle(data?.response);

  return <ReferenceList data={tempData} count={data?.totalCount} />;
};

export default References;
