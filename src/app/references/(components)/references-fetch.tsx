import { useGetReferencesQuery } from "@/store/features/references/referencesApi";
import getCookieData from "@/utils/get-cookie";
import ReferencesSkeleton from "@/components/UI/skeletons/references-skeleton";
import ReferenceList from "./reference-list";
import shuffle from "@/utils/shuffle";
import FetchError from "@/components/UI/error/fetch-error";
import NotFoundError from "@/components/UI/not-found/not-found";
import { TbPhotoSquareRounded } from "react-icons/tb";

const References = ({ select }: { select: string }) => {
  const { data, isLoading, isError, error } = useGetReferencesQuery({
    tag: select,
    like: getCookieData("auth-data").token ? true : false,
  });

  if (isLoading) return <ReferencesSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return (
        <NotFoundError
          Icon={TbPhotoSquareRounded}
          message="Референсы не найдены"
        />
      );
    }
    return <FetchError message="Ошибка запроса к референсам" />;
  }

  if (!data || !data?.response.length)
    return (
      <NotFoundError
        Icon={TbPhotoSquareRounded}
        message="Референсы не найдены"
      />
    );
  const tempData = shuffle(data?.response);

  return <ReferenceList data={tempData} count={data?.totalCount} />;
};

export default References;
