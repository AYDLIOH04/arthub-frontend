import ReferencesSkeleton from "@/components/skeletons/references-skeleton";
import ReferenceList from "./reference-list";
import FetchError from "@/components/error/fetch-error";
import NotFoundError from "@/components/not-found/not-found";
import { TbPhotoSquareRounded } from "react-icons/tb";
import useLazyInfiniteReferences from "@/hooks/useLazyInfiniteReferences";

const References = ({ select }: { select: string }) => {
  const { currentData, isLoading, isError, error, onLoadMore } =
    useLazyInfiniteReferences(select);

  if (isLoading) return <ReferencesSkeleton />;

  if (isError) {
    if (error === "404") {
      return (
        <NotFoundError
          Icon={TbPhotoSquareRounded}
          message="Референсы не найдены"
        />
      );
    }
    return <FetchError message="Ошибка запроса к референсам" />;
  }

  if (!currentData || !currentData.length)
    return (
      <NotFoundError
        Icon={TbPhotoSquareRounded}
        message="Референсы не найдены"
      />
    );

  return <ReferenceList data={currentData} onLoadMore={onLoadMore} />;
};

export default References;
