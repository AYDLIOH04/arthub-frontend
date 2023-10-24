import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { logout, setUser } from "./features/auth/authSlice";
import Cookies from "js-cookie";
import { useRefreshMutation } from "./features/auth/authApi";
import { toast } from "react-toastify";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const [refreshTokensApi, { data, isSuccess, isError }] = useRefreshMutation();

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
    if (isSuccess) {
      dispatch(setUser(data));
      // toast.success("Вход успешен");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      dispatch(logout());
      toast.error("Ошибка входа");
    }
  }, [isError]);

  return <>{children}</>;
}
