import { IAuth } from '@/models/IAuth';
import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export interface AuthState {
  name: string | null;
  token: string | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  name: null,
  token: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuth>) => {
      Cookies.set("user", JSON.stringify({
        name: action.payload.name,
        token: action.payload.token,
      }), { expires: 7 });

      const user = Cookies.get("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        state.name = parsedUser.name;
        state.token = parsedUser.token;
        state.isAuth = true;
      }
    },
    logout: (state) => {
      Cookies.remove("user");
      state.name = null;
      state.token = null;
      state.isAuth = false;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
