import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useTimerRedirect = (redirect: string, seconds: number) => {
  const router = useRouter();
  const [redirectSeconds, setRedirectSeconds] = useState(seconds);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(redirect);
    }, redirectSeconds * 1000);

    const interval = setInterval(() => {
      setRedirectSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          clearInterval(interval);
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return redirectSeconds;
}

export default useTimerRedirect;