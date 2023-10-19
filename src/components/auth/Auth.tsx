'use client'

import { useState } from "react";
import SignUpForm from "./SignUp";
import SignInForm from "./SignIn";

export default function Auth() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="max-w-[500px] mx-auto">
      {showRegister
        ? <SignUpForm setShowRegister={setShowRegister}/>
        : <SignInForm setShowRegister={setShowRegister}/>
      }
    </div>
  )
}
