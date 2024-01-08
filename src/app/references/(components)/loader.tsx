import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Loader = ({ cb }: { cb: any }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
      cb();
      setTimeout(() => setIsLoading(false), 200);
    }
  }, [inView, cb]);

  return <div ref={ref} />;
};

export default Loader;
