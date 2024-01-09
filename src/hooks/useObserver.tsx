import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useObserver = (callback: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
      callback();
      setTimeout(() => setIsLoading(false), 200);
    }
  }, [inView, callback]);

  return ref;
};

export default useObserver;
