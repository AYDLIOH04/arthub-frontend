"use client";

import Link from "next/link";
import {
  activeNavLinkStyles,
  authLinkStyles,
  navLinkStyles,
} from "./header-links";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setIsAuth } from "@/store/features/auth/authSlice";

export const Authorization = () => {
  const pathname = usePathname();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();

  return (
    <>
      {isAuth ? (
        <>
          <Link
            href="/profile"
            className={
              navLinkStyles +
              (pathname === "/profile" ? activeNavLinkStyles : "")
            }
          >
            Профиль
          </Link>
          <a
            onClick={() => dispatch(setIsAuth(false))}
            className={authLinkStyles}
          >
            Sign Out
          </a>
        </>
      ) : (
        <Link href="/auth" className={authLinkStyles}>
          Sign In
        </Link>
      )}
    </>
  );
};
