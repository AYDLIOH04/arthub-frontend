'use client';

import { MouseEvent, useState } from "react";

import { setIsAuth } from "@/store/features/auth/authSlice"; // Удалить
import { useAppDispatch } from "@/store/hooks"; // Удалить
import { useRouter } from "next/navigation";

export default function SignInForm({ setShowRegister }: any) {
  const [email, setEmail] = useState<string | any>('');
  const [password, setPassword] = useState<string | any>('');
  const router = useRouter()
  
  const dispatch = useAppDispatch(); // Удалить

  function loginHandler(e: MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setIsAuth(true)) // Удалить
    router.back();
  }

  return (
    <form
      onSubmit={loginHandler}
      className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-auto"
    >
      <h1 className="text-[20px] text-center mb-5">Вход</h1>
      <div className="relative mb-12" data-te-input-wrapper-init>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="peer placeholder:opacity-0 block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear border-2 border-indigo-100 focus:border-indigo-400 text-neutral-600"
          id="signinEmail"
          placeholder="Enter email"
        />
        <label
          htmlFor="signinEmail"
          className={`pointer-events-none absolute left-2 top-[6px] mb-0 max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-400 transition-all duration-200 ease-out ${email && '-translate-y-[1rem] scale-[0.8] text-primary'} peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8] peer-focus:text-primary z-10 bg-white px-2 py-0 m-0 rounded-xl`}
        >
          Email address
        </label>
      </div>

      <div className="relative mb-6">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="peer placeholder:opacity-0 block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear border-2 border-indigo-100 focus:border-indigo-400 text-neutral-600"
          id="signupPassword"
          placeholder="Enter password"
        />
        <label
          htmlFor="signupPassword"
          className={`pointer-events-none absolute left-2 top-[6px] mb-0 max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-400 transition-all duration-200 ease-out ${password && '-translate-y-[1rem] scale-[0.8] text-primary'} peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8] peer-focus:text-primary z-10 bg-white px-2 py-0 m-0 rounded-xl`}
        >
          Password
        </label>
      </div>

      <button
        type="submit"
        className="text-white text-[18px] bg-indigo-400 hover:bg-indigo-300 rounded-lg px-4 py-3 ease-in duration-150"
      >
        Sign In
      </button>

      <div className="mt-[50px]">
        <h2>
          Нет аккаунта?{" "}
          <a
            onClick={() => setShowRegister(true)}
            className="cursor-pointer hover:text-blue-500 ease-in duration-150 font-bold"
          >
            {" "}
            Регистрация
          </a>
        </h2>
      </div>
    </form>
  );
}
