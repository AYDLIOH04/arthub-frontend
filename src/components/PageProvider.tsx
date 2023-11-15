"use client";

import { useAppSelector } from "@/store/hooks";
import { redirect } from "next/navigation";

export default function PrivatePageProvider({ children }: { children: any }) {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    redirect("/auth");
  }

  return <>{children}</>;
}
