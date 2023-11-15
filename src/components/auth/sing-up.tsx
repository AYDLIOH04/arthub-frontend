import { useRegisterMutation } from "@/store/features/auth/authApi";
import { setUser } from "@/store/features/auth/authSlice";
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "../UI/auth-input";

export default function SignUpForm({ setShowRegister }: any) {
  const [email, setEmail] = useState<string | any>("");
  const [password, setPassword] = useState<string | any>("");
  const [login, setLogin] = useState<string | any>("");

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
    if (email && password && login) {
      await registerUser({ email, password, login });
    }
  }

  useEffect(() => {
    if (isRegisterSuccess) {
      dispatch(setUser(registerData));
      setEmail("");
      setPassword("");
      setLogin("");
      toast.success("Регистрация успешена");
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
      className="max-w-sm rounded-lg p-6 mx-auto w-full flex flex-col gap-5 font-blender text-[25px]"
    >
      <h1 className="text-[20px] text-center uppercase font-damione mb-4">
        Регистрация
      </h1>

      <Input
        value={login}
        onChange={(e: any) => setLogin(e.target.value)}
        type="text"
        id="signupLogin"
        placeholder="Username"
      />

      <Input
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        type="email"
        id="signupEmail"
        placeholder="Email"
      />

      <Input
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
        type="password"
        id="signupPassword"
        placeholder="Password"
      />

      <button
        type="submit"
        className="text-white text-[20px] bg-background hover:bg-hover rounded-lg px-4 py-3 ease-in duration-200 w-full mt-8"
      >
        Зарегистрироваться
      </button>

      <h2 className="text-[20px]">
        Есть аккаунт?{" "}
        <a
          onClick={() => setShowRegister(false)}
          className="cursor-pointer hover:text-hover ease-out duration-200 font-bold"
        >
          {" "}
          Вход
        </a>
      </h2>
    </form>
  );
}
