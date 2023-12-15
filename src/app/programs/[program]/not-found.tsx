"use client";

import useTimerRedirect from "@/hooks/useTimerRedirect";
import { IoLogoAppleAr } from "react-icons/io5";

const NotFoundProgram = () => {
  const redirectSeconds = useTimerRedirect('/programs', 3);

  return (
    <div className="flex items-center justify-center h-screen font-blender">
      <div className="text-center">
        <div className="w-[80px] h-[80px] mx-auto flex justify-center items-center bg-hover rounded-full mb-5">
          <IoLogoAppleAr size={60} className="text-background" />
        </div>
        <h2 className="font-bold text-4xl uppercase">Not Found</h2>
        <p className="text-2xl">Программа не найдена</p>
        <p>Перенаправление через {redirectSeconds}</p>
      </div>
    </div>
  );
};

export default NotFoundProgram;
