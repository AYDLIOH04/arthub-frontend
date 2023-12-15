"use client";

import TutorialItem from "./tutorial-item";
import {
  useAddToFavoriteMutation,
  useGetTutorialsQuery,
} from "@/store/features/tutorials/tutorialsApi";
import Pagination from "@/components/UI/pagination";
import getCookieData from "@/utils/get-cookie";
import TutorialsNotFound from "@/components/UI/not-found/tutorials-notfound";
import TutorialsFetchError from "@/components/UI/error/tutorials-error";
import TutorialsSkeleton from "@/components/UI/skeletons/tutorials-skeleton";

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
    size: 3,
    like: getCookieData("auth-data").token ? true : false,
  });

  const totalCountHeader = data?.totalCount;
  const totalPages = totalCountHeader ? Math.ceil(totalCountHeader / 3) : 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <TutorialsSkeleton />;

  if (isError) {
    if ("status" in error && error.status === 404) {
      return <TutorialsNotFound />;
    }
    return <TutorialsFetchError />;
  }

  if (!data || !data?.response.length) return <TutorialsNotFound />;

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
