"use client";

import TutorialItem from "./tutorial-item";
import {
  useAddToFavoriteMutation,
  useGetTutorialsQuery,
} from "@/store/features/tutorials/tutorialsApi";
import Pagination from "@/components/UI/pagination";
import { getCookieData } from "@/utils";
import TutorialsSkeleton from "@/components/skeletons/tutorials-skeleton";
import FetchError from "@/components/error/fetch-error";
import { PiVideoFill } from "react-icons/pi";
import NotFoundError from "@/components/not-found/not-found";

const TutorialList = ({
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
  const [addToFavoriteTutorial] = useAddToFavoriteMutation();
  const { data, isLoading, isError, error } = useGetTutorialsQuery({
    search,
    difficulty: select,
    page: currentPage,
    size: 6,
    like: getCookieData("auth-data").token ? true : false,
  });

  const totalCountHeader = data?.totalCount;
  const totalPages = totalCountHeader ? Math.ceil(totalCountHeader / 6) : 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <TutorialsSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return (
        <NotFoundError Icon={PiVideoFill} message="Туториалы не найдены" />
      );
    }
    return <FetchError message="Ошибка запроса к туториалам" />;
  }

  if (!data || !data?.response.length)
    return <NotFoundError Icon={PiVideoFill} message="Туториалы не найдены" />;

  return (
    <section>
      <div className="flex flex-wrap justify-center gap-8">
        {data.response?.map((tutorial, index) => (
          <TutorialItem
            key={index}
            tutorial={tutorial}
            addToFavorite={addToFavoriteTutorial}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default TutorialList;
