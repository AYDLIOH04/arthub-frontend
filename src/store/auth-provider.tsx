import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { logout, refresh } from "./features/auth/authSlice";
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
    const rt = Cookies.get("auth-refresh");
    if (rt) {
      refreshTokens();
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(refresh(data));
      toast.success("Вход успешен");
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
