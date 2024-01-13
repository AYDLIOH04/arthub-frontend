"use client";

import useTimerRedirect from "@/hooks/useTimerRedirect";
import { MdError } from "react-icons/md";

const Error = () => {
  const redirectSeconds = useTimerRedirect("/", 3);

  return (
    <div className="flex items-center justify-center h-screen font-blender">
      <div className="text-center">
        <div className="mx-auto flex justify-center items-center rounded-full mb-5">
          <MdError size={90} className="text-rose-400" />
        </div>
        <h2 className="font-bold text-4xl uppercase">Error</h2>
        <p className="text-xl mt-1">
          Перенаправление через {redirectSeconds}...
        </p>
      </div>
    </div>
  );
};

export default Error;
