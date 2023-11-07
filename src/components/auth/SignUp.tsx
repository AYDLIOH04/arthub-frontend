import { useRegisterMutation } from "@/store/features/auth/authApi";
import { setUser } from "@/store/features/auth/authSlice";
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function SignUpForm({ setShowRegister }: any) {
  const [email, setEmail] = useState<string | any>("");
  const [password, setPassword] = useState<string | any>("");
  const router = useRouter();

  const dispatch = useAppDispatch();
  const [
    registerUser,
    {
      data: registerData,
      isSuccess: isRegisterSuccess,
      isError: isRegisterError,
      error: registerError,
    },
  ] = useRegisterMutation();

  async function registrationHandler(e: MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email && password) {
      await registerUser({ email, password });
    }
  }

  useEffect(() => {
    if (isRegisterSuccess) {
      dispatch(setUser(registerData));
      setEmail("");
      setPassword("");
      toast.success("Регистрация успешена")
      router.back();
    }
  }, [isRegisterSuccess]);

  useEffect(() => {
    if (isRegisterError) {
      toast.error((registerError as any).data.message);
    }
  }, [isRegisterError]);

  return (
    <form
      onSubmit={registrationHandler}
      className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-auto"
    >
      <h1 className="text-[20px] text-center mb-5">Регистрация</h1>
      <div className="relative mb-12" data-te-input-wrapper-init>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="peer placeholder:opacity-0 block min-h-[auto] w-full rounded bg-background px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear border-2 border-dusk text-white"
          id="signupEmail"
          placeholder="Enter email"
        />
        <label
          htmlFor="signupEmail"
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
          id="signinPassword"
          placeholder="Enter password"
        />
        <label
          htmlFor="signinPassword"
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
        Sign Up
      </button>

      <div className="mt-[50px]">
        <h3>
          Есть аккаунт?{" "}
          <a
            onClick={() => setShowRegister(false)}
            className="cursor-pointer hover:text-hover ease-out duration-200 font-bold"
          >
            {" "}
            Вход
          </a>
        </h3>
      </div>
    </form>
  );
}
