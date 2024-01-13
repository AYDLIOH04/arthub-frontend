import { IReference } from "@/models";
import { getCookieData, shuffle } from '@/utils';
import { useEffect, useState } from "react";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const PAGE_SIZE = 20;
const COOKIE_NAME = "auth-data";

const buildUrl = (page: number, select: string) => {
  const token = getCookieData(COOKIE_NAME)?.token || "";
  const likePath = token ? "/like" : "";
  return `${URL}/references${likePath}?page=${page}&size=${PAGE_SIZE}${
    select ? `&${select}` : ""
  }`;
};

const useLazyInfiniteReferences = (select: any) => {
  const fetchData = async () => {
    try {
      const response = await fetch(buildUrl(1, select), {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getCookieData(COOKIE_NAME)?.token || ""}`,
        },
      });

      const result = await response.json();
      setTotalCount(result.totalCount);
      setCurrentData(shuffle(result.response));
    } catch (e) {
      handleFetchError();
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreData = async () => {
    try {
      const response = await fetch(buildUrl(page, select), {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getCookieData(COOKIE_NAME)?.token || ""}`,
        },
      });

      const result = await response.json();
      setCurrentData([...currentData, ...shuffle(result.response)]);
    } catch (e) {
      handleFetchError();
    } finally {
      setIsLoading(false);
    }
  };

  const handleFetchError = () => {
    setIsError(true);
    setError("Fetch Error");
  };

  const [totalCount, setTotalCount] = useState(0);
  const [currentData, setCurrentData] = useState<IReference[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const onLoadMore = () => {
    if ((page - 1) * PAGE_SIZE < totalCount) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchData();
  }, [select]);

  useEffect(() => {
    if (page !== 1) {
      loadMoreData();
    }
  }, [page]);

  return { currentData, isLoading, isError, error, onLoadMore };
};

export default useLazyInfiniteReferences;
