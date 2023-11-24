'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  const router = useRouter();
  const [redirectSeconds, setRedirectSeconds] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
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

  return (
    <div className="flex items-center justify-center h-screen font-blender">
      <div className="text-center">
        <div className="w-[80px] h-[80px] mx-auto flex justify-center items-center bg-rose-400 rounded-full mb-5">
          <TbError404 size={60} className="text-background" />
        </div>
        <h2 className="font-bold text-4xl uppercase">Not Found</h2>
        <p className="text-2xl">Страница не найдена</p>
        <p className="text-1xl mt-1">Перенаправление через {redirectSeconds}...</p>
      </div>
    </div>
  );
};

export default NotFound;