import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { setUser } from "./features/auth/authSlice";
import Cookies from "js-cookie";
import { useRefreshMutation } from "./features/auth/authApi";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const [refreshTokensApi, {data, isSuccess}] = useRefreshMutation();

  async function refreshTokens() {
    return await refreshTokensApi({});
  }

  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      refreshTokens();
    }
  }, []);

  useEffect(() => {
    if (isSuccess){
      dispatch(setUser(data));
    }
  }, [isSuccess])

  return <>{children}</>;
}
