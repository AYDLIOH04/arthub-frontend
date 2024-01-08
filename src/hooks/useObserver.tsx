import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useObserver = (cb: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
      cb();
      setTimeout(() => setIsLoading(false), 200);
    }
  }, [inView, cb]);

  return ref;
};

export default useObserver;
