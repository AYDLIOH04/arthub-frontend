import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { userApi } from './features/user/userApi';
import { brushesApi } from './features/brushes/brushesApi';
import { authApi } from './features/auth/authApi';
import authReducer, { AuthState } from './features/auth/authSlice'; // Импортируйте редюсер

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
