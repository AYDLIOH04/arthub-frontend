import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '@/models/IUser';

const baseUrl = 'http://localhost:7000';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: (userId) => `users/${userId}`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
export const userApiReducer = userApi.reducer;
export const userApiMiddleware = userApi.middleware;
