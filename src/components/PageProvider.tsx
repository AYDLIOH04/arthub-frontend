"use client";

import { redirect } from "next/navigation";
import Cookies from "js-cookie";

const PrivatePageProvider = ({ children }: { children: any }) => {
  if (!Cookies.get("auth-refresh")) {
    redirect('/auth')
  }

  return <>{children}</>;
};

export default PrivatePageProvider;
