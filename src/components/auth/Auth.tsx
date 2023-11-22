"use client";

import { useState } from "react";
import SignUpForm from "./sing-up";
import SignInForm from "./sign-in";
import { useAppSelector } from "@/store/hooks";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";

const Auth = () => {
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
      className="w-[900px] mx-auto md:flex"
    >
      <div className="md:w-1/2 w-full flex bg-main_purple items-center z-50 md:py-5 py-2 rounded-xl sm:rounded-none sm:rounded-l-xl">
        {showRegister ? (
          <SignUpForm setShowRegister={setShowRegister} />
        ) : (
          <SignInForm setShowRegister={setShowRegister} />
        )}
      </div>
      <div className="w-1/2 hidden md:flex justify-center items-center bg-[#2C1A4A] rounded-r-xl">
        <img
          src="auth/auth-photo.png"
          alt="auth photo"
          className="w-full select-none pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

export default Auth;
