import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '@/models/IUser';
import { IBrush } from '@/models/IBrush';

const baseUrl = 'https://example.com/api';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    getUser: builder.query<IUser, number>({
      query: (userId) => `user/${userId}`,
    }),

    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (user) => ({
        url: 'user',
        method: 'POST',
        body: user,
      }),
    }),

    updateUser: builder.mutation<IUser, { userId: number, user: Partial<IUser> }>({
      query: ({ userId, user }) => ({
        url: `user/${userId}`,
        method: 'PUT',
        body: user,
      }),
    }),

    deleteUser: builder.mutation<void, number>({
      query: (userId) => ({
        url: `user/${userId}`,
        method: 'DELETE',
      }),
    }),

    getFavoriteBrushes: builder.query<IBrush[], number>({
      query: (userId) => `user/${userId}/favorites`,
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation } = userApi;
export const userApiReducer = userApi.reducer;
export const userApiMiddleware = userApi.middleware;
