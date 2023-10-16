"use client";

import Link from "next/link";
import {
  activeNavLinkStyles,
  authLinkStyles,
  navLinkStyles,
} from "./header-links";
import { usePathname } from "next/navigation";
import { setIsAuth } from "@/store/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export const Authorization = () => {
  const pathname = usePathname();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

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
              onClick={() => dispatch(setIsAuth(false))}
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
