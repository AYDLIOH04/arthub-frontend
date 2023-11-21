import { IAuth, IRefresh } from '@/models';
import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export interface AuthState {
  email: string | null;
  accessToken: string | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  email: null,
  accessToken: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuth>) => {
      Cookies.set("auth-refresh", JSON.stringify(action.payload.refresh_token), { expires: 7 });
      Cookies.set("auth-data", JSON.stringify({ email: action.payload.email, token: action.payload.access_token }), { expires: 1 });

      const user = Cookies.get("auth-data");
      if (user) {
        const parsedUser = JSON.parse(user || "{}");
        state.email = parsedUser.email;
        state.accessToken = parsedUser.accessToken;
        state.isAuth = true;
      }
    },
    refresh: (state, action: PayloadAction<IRefresh>) => {
      Cookies.set("auth-data", JSON.stringify({ email: action.payload.email, token: action.payload.access_token }), { expires: 1 });
      const user = Cookies.get("auth-data");
      if (user) {
        const parsedUser = JSON.parse(user || "{}");
        state.email = parsedUser.email;
        state.accessToken = parsedUser.accessToken;
        state.isAuth = true;
      }
    },
    logout: (state) => {
      Cookies.remove("auth-data");
      Cookies.remove("auth-refresh");
      state.email = null;
      state.accessToken = null;
      state.isAuth = false;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, refresh, logout } = authSlice.actions;
export default authSlice.reducer;
