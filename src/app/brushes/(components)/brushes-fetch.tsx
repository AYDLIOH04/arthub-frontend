import BrushesSkeleton from "../../../components/UI/skeletons/brushes-skeleton";
import { getCookieData } from '@/utils';
import { useGetBrushesQuery } from "@/store/features/brushes/brushesApi";
import BrushList from "./brush-list";
import FetchError from "@/components/UI/error/fetch-error";
import { HiMiniPaintBrush } from "react-icons/hi2";
import NotFoundError from "@/components/UI/not-found/not-found";

const Brushes = ({
  search,
  select,
  currentPage,
  setCurrentPage,
}: {
  search: string;
  select: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) => {
  const { data, isLoading, isError, error } = useGetBrushesQuery({
    search,
    program: select,
    page: currentPage,
    size: 8,
    like: getCookieData("auth-data").token ? true : false,
  });

  const totalCountHeader = data?.totalCount;
  const totalPages = totalCountHeader ? Math.ceil(totalCountHeader / 8) : 1;

  if (isLoading) return <BrushesSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return (
        <NotFoundError Icon={HiMiniPaintBrush} message="Кисти не найдены" />
      );
    }
    return <FetchError message="Ошибка запроса к кистям" />;
  }

  if (!data || !data?.response.length)
    return <NotFoundError Icon={HiMiniPaintBrush} message="Кисти не найдены" />;

  return (
    <BrushList
      data={data?.response}
      totalPages={totalPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Brushes;
