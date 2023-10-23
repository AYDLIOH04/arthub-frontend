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
    <>
      {isAuth ? (
        <>
          <li className="inline">
            <Link
              href="/profile"
              className={
                navLinkStyles +
                (pathname === "/profile" ? activeNavLinkStyles : "")
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
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li className="inline">
          <Link href="/auth" className={authLinkStyles}>
            Sign In
          </Link>
        </li>
      )}
    </>
  );
};
