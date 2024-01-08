import { IReference } from "@/models";
import getCookieData from "@/utils/get-cookie";
import { useEffect, useState } from "react";
import shuffle from "@/utils/shuffle";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const useLazyInfiniteReferences = (select: any) => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/references${
          (getCookieData("auth-data").token ? true : false) ? "/like" : ""
        }?page=1&size=20${select ? `&${select}` : ""}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${getCookieData("auth-data").token}`,
          },
        }
      );

      const result = await response.json();
      setTotalCount(result.totalCount);
      setCurrentData(shuffle(result.response));
    } catch (e) {
      setIsError(true);
      setError("Fetch Error");
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/references${
          (getCookieData("auth-data").token ? true : false) ? "/like" : ""
        }?page=${page}&size=20${select ? `&${select}` : ""}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${getCookieData("auth-data").token}`,
          },
        }
      );

      const result = await response.json();
      setCurrentData([...currentData, ...shuffle(result.response)]);
    } catch (e) {
      setIsError(true);
      setError("Fetch Error");
    } finally {
      setIsLoading(false);
    }
  };

  const [totalCount, setTotalCount] = useState(0);
  const [currentData, setCurrentData] = useState<IReference[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const onLoadMore = () => {
    if ((page - 1) * 20 < totalCount) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchData();
  }, [select]);

  useEffect(() => {
    if (page !== 1) {
      loadMore();
    }
  }, [page]);

  return { currentData, isLoading, isError, error, onLoadMore };
};

export default useLazyInfiniteReferences;
