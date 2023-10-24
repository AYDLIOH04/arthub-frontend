import { IAuth } from '@/models/IAuth';
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
      Cookies.set("user", JSON.stringify(action.payload), { expires: 7 });

      const user = Cookies.get("user");
      if (user) {
        const parsedUser = JSON.parse(user || "{}");
        state.email = parsedUser.email;
        state.accessToken = parsedUser.accessToken;
        state.isAuth = true;
      }
    },
    logout: (state) => {
      Cookies.remove("user");
      state.email = null;
      state.accessToken = null;
      state.isAuth = false;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
