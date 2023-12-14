import { useEffect, useState } from "react";

const useScrollOffset = (offset: number) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY >= offset) {
      setScrolled(true);
    }

    const handleScroll = () => {
      if (window.scrollY >= offset) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return scrolled
};

export default useScrollOffset;