"use client";

import { useState } from "react";
import SignUpForm from "./sing-up";
import SignInForm from "./sign-in";
import { useAppSelector } from "@/store/hooks";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";

export default function Auth() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const [showRegister, setShowRegister] = useState(false);

  if (isAuth) {
    redirect("/");
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="gl:w-[1200px] w-[900px] mx-auto md:flex bg-main_purple md:py-10 py-5 md:px-10 px-0 rounded-xl"
    >
      <div className="md:w-1/2 w-full flex items-center z-50">
        {showRegister ? (
          <SignUpForm setShowRegister={setShowRegister} />
        ) : (
          <SignInForm setShowRegister={setShowRegister} />
        )}
      </div>
      <div className="w-1/2 hidden md:block">
        <img src="icon.svg" alt="auth photo" className="h-full w-full" />
      </div>
    </motion.div>
  );
}
