"use client";

import Link from "next/link";
import {
  activeNavLinkStyles,
  authLinkStyles,
  navLinkStyles,
} from "./header-links";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toast } from "react-toastify";
import { logout } from "@/store/features/auth/authSlice";
import { useLogoutMutation } from "@/store/features/auth/authApi";

export const Authorization = () => {
  const pathname = usePathname();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();
  const [logoutApi, {}] = useLogoutMutation();

  async function signOut() {
    await logoutApi({});
    dispatch(logout());
    toast.success("Выход успешен");
  }

  return (
    <div className="hidden 1120px:block">
      {isAuth ? (
        <div className="space-x-5">
          <li className="inline">
            <Link
              href="/profile"
              className={
                navLinkStyles +
                (pathname === "/profile" ? "text-hover" : "")
              }
            >
              Профиль
            </Link>
          </li>
          <li className="inline">
            <button
              onClick={signOut}
              className={authLinkStyles}
            >
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
