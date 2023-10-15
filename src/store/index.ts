import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { userApi } from './api/userApi';
import { brushesApi } from './api/brushesApi';
import { authApi } from './features/auth/authApi';
import authReducer, { AuthState } from './features/auth/authSlice'; // Импортируйте редюсер

export interface RootState {
  auth: AuthState;
}

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [brushesApi.reducerPath]: brushesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, brushesApi.middleware, authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
