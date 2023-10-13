"use client";

import Link from "next/link";
import { useState } from "react";
import {
  activeNavLinkStyles,
  authLinkStyles,
  navLinkStyles,
} from "./header-links";
import { usePathname } from "next/navigation";

export const Authorization = () => {
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState(false);

  const signIn = () => {
    setIsAuth(true);
  };

  const signOut = () => {
    setIsAuth(false);
  };

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
          <a onClick={signOut} className={authLinkStyles}>
            Sign Out
          </a>
        </>
      ) : (
        <a onClick={signIn} className={authLinkStyles}>
          Sign In
        </a>
      )}
    </>
  );
};
