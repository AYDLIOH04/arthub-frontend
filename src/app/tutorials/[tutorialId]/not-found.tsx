"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoLogoAppleAr } from "react-icons/io5";

const NotFoundTutorial = () => {
  const router = useRouter();
  const [redirectSeconds, setRedirectSeconds] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/tutorials");
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
        <div className="w-[80px] h-[80px] mx-auto flex justify-center items-center bg-hover rounded-full mb-5">
          <IoLogoAppleAr size={60} className="text-background" />
        </div>
        <h2 className="font-bold text-4xl uppercase">Not Found</h2>
        <p className="text-2xl">Туториал не найден</p>
        <p>Перенаправление через {redirectSeconds}</p>
      </div>
    </div>
  );
};

export default NotFoundTutorial;
