"use client";

import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";
import AuthProvider from "./auth-provider";
import { ToastContainer } from "react-toastify";

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
      <ToastContainer />
    </Provider>
  );
};
