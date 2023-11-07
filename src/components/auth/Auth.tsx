"use client";

import { useState } from "react";
import SignUpForm from "./SignUp";
import SignInForm from "./SignIn";
import { useAppSelector } from "@/store/hooks";
import { redirect } from "next/navigation";

export default function Auth() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const [showRegister, setShowRegister] = useState(false);

  if (isAuth) {
    redirect("/");
  }

  return (
    <div className="max-w-[500px] mx-auto mt-[100px]">
      {showRegister ? (
        <SignUpForm setShowRegister={setShowRegister} />
      ) : (
        <SignInForm setShowRegister={setShowRegister} />
      )}
    </div>
  );
}
