"use client";

import Link from "next/link";
import {
  activeNavLinkStyles,
  authLinkStyles,
  navLinkStyles,
} from "./links-data";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toast } from "react-toastify";
import { logout } from "@/store/features/auth/authSlice";
import { useLogoutMutation } from "@/store/features/auth/authApi";

const Authorization = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();
  const [logoutApi, {}] = useLogoutMutation();

  const signOut = async () => {
    await logoutApi({});
    dispatch(logout());
    toast.success("Выход успешен");
    router.push('/');
  };

  return (
    <div className="hidden 1120px:block">
      {isAuth ? (
        <div className="space-x-5">
          <li className="inline">
            <Link
              href="/profile/favorites"
              className={
                navLinkStyles + (pathname.includes("/profile") ? " text-hover" : "")
              }
            >
              Профиль
            </Link>
          </li>
          <li className="inline">
            <button onClick={signOut} className={authLinkStyles}>
              Выход
            </button>
          </li>
        </div>
      ) : (
        <li className="inline">
          <Link href="/auth" className={authLinkStyles}>
            Вход
          </Link>
        </li>
      )}
    </div>
  );
};

export default Authorization;
