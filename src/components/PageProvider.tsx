"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import { redirect } from "next/navigation";

const PrivatePageProvider = ({ children }: { children: any }) => {
  const user = useCurrentUser();
  
  if (!user.isAuth) {
    redirect("/auth");
  }

  return <>{children}</>;
};

export default PrivatePageProvider;
