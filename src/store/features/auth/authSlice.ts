import { IAuth } from '@/models/IAuth';
import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { useLogoutMutation } from './authApi';
import { useAppDispatch } from '@/store/hooks';

export interface AuthState {
  name: string | null;
  accessToken: string | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  name: null,
  accessToken: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuth>) => {
      Cookies.set("user", JSON.stringify({
        name: action.payload.name,
        accessToken: action.payload.accessToken,
      }), { expires: 7 });

      const user = Cookies.get("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        state.name = parsedUser.name;
        state.accessToken = parsedUser.token;
        state.isAuth = true;
      }
    },
    logout: (state) => {
      Cookies.remove("user");
      state.name = null;
      state.accessToken = null;
      state.isAuth = false;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
