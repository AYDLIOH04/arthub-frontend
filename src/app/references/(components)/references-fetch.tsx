import ReferencesSkeleton from "@/components/UI/skeletons/references-skeleton";
import ReferenceList from "./reference-list";
import FetchError from "@/components/UI/error/fetch-error";
import NotFoundError from "@/components/UI/not-found/not-found";
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

  return (
    <ReferenceList
      data={currentData}
      count={currentData.length}
      onLoadMore={onLoadMore}
    />
  );
};

export default References;