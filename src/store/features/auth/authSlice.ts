import { IAuth } from '@/models/IAuth';
import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      localStorage.setItem("user", JSON.stringify({
        name: action.payload,
        token: action.payload,
      }))

      state.name = action.payload.name;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    logout: (state) => {
      localStorage.clear();
      state.name = null;
      state.token = null;
      state.isAuth = false;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setIsAuth, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
