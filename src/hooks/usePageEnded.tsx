import { useEffect, useState } from "react";

const usePageEnded = () => {
  const [isPageEnded, setIsPageEnded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (pageHeight - window.scrollY <= 100) {
        setIsPageEnded(true);
      } else {
        setIsPageEnded(false);
      }
    };

    const pageHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (pageHeight - window.scrollY <= 100) {
      setIsPageEnded(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isPageEnded;
};

export default usePageEnded;
