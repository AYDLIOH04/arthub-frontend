import authReducer from './features/auth/authSlice'; // Импортируйте редюсер
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { userApi } from './features/user/userApi';
import { brushesApi } from './features/brushes/brushesApi';
import { authApi } from './features/auth/authApi';
import { programsApi } from './features/programs/programsApi';
import { referencesApi } from './features/references/referencesApi';
import { tutorialsApi } from './features/tutorials/tutorialsApi';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [brushesApi.reducerPath]: brushesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [programsApi.reducerPath]: programsApi.reducer,
    [referencesApi.reducerPath]: referencesApi.reducer,
    [tutorialsApi.reducerPath]: tutorialsApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      brushesApi.middleware,
      authApi.middleware,
      programsApi.middleware,
      referencesApi.middleware,
      tutorialsApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
