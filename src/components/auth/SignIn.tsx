'use client'

import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth } from "@/store/features/auth/authSlice";

export default function SignInForm() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();

  return (
    <main>
      {isAuth ? <h2>Вы залогинены!</h2> : <h2>Залогиньтесь!</h2>}
      <button onClick={() => dispatch(setIsAuth(true))}>Sign In</button>
    </main>
  )
}
