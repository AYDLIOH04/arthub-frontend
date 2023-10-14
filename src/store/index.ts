import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { userApi } from './api/userApi';
import { brushesApi } from './api/brushesApi';
import { authApi } from './api/authApi';

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [brushesApi.reducerPath]: brushesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, brushesApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
export default store;
