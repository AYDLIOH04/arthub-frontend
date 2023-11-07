"use client";

import { MouseEvent, useEffect, useState } from "react";

import { setUser } from "@/store/features/auth/authSlice"; // Удалить
import { useAppDispatch } from "@/store/hooks"; // Удалить
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/store/features/auth/authApi";
import { toast } from "react-toastify";

export default function SignInForm({ setShowRegister }: any) {
  const [email, setEmail] = useState<string | any>("");
  const [password, setPassword] = useState<string | any>("");
  const router = useRouter();

  const dispatch = useAppDispatch();
  
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSucces,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginMutation();

  async function loginHandler(e: MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email && password) {
      await loginUser({ email, password });
    }
  }

  useEffect(() => {
    if (isLoginSucces) {
      dispatch(setUser(loginData));
      setEmail("");
      setPassword("");
      toast.success("Вход успешен")
      router.back();
    }
  }, [isLoginSucces]);

  useEffect(() => {
    if (isLoginError) {
      toast.error((loginError as any).data.message);
    }
  }, [isLoginError]);

  return (
    <form
      onSubmit={loginHandler}
      className="block max-w-sm rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-auto"
    >
      <h1 className="text-[20px] text-center mb-5">Вход</h1>
      <div className="relative mb-12" data-te-input-wrapper-init>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="peer placeholder:opacity-0 block min-h-[auto] w-full rounded bg-background px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear border-2 border-dusk text-white"
          id="signinEmail"
          placeholder="Enter email"
        />
        <label
          htmlFor="signinEmail"
          className={`pointer-events-none absolute left-2 top-[6px] mb-0 max-w-[90%] origin-[0_0] truncate leading-[1.6] text-dusk transition-all duration-200 ease-out ${
            email && "-translate-y-[1rem] scale-[0.8] text-dusk"
          } peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8] z-10 bg-background px-2 py-0 m-0 rounded-xl`}
        >
          Email address
        </label>
      </div>

      <div className="relative mb-6">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="peer placeholder:opacity-0 block min-h-[auto] w-full rounded bg-background px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear border-2 border-dusk focus:border-indigo-400 text-white"
          id="signupPassword"
          placeholder="Enter password"
        />
        <label
          htmlFor="signupPassword"
          className={`pointer-events-none absolute left-2 top-[6px] mb-0 max-w-[90%] origin-[0_0] truncate leading-[1.6] text-dusk transition-all duration-200 ease-out ${
            password && "-translate-y-[1rem] scale-[0.8] text-dusk"
          } peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8] z-10 bg-background px-2 py-0 m-0 rounded-xl`}
        >
          Password
        </label>
      </div>

      <button
        type="submit"
        className="text-white text-[20px] bg-dusk hover:bg-hover rounded-lg px-4 py-3 ease-in duration-200"
      >
        Sign In
      </button>

      <div className="mt-[50px]">
        <h2>
          Нет аккаунта?{" "}
          <a
            onClick={() => setShowRegister(true)}
            className="cursor-pointer hover:text-hover ease-out duration-200 font-bold"
          >
            {" "}
            Регистрация
          </a>
        </h2>
      </div>
    </form>
  );
}
