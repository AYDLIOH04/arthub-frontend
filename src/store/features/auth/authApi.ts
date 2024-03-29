import { ICredential } from '@/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookieData } from '@/utils';

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: ICredential) => ({
        url: '/auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials: ICredential) => ({
        url: '/auth/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`
        },
      }),
    }),
    refresh: builder.mutation({
      query: () => ({
        url: '/auth/refresh',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getCookieData('auth-refresh')}`
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useRefreshMutation,
} = authApi;


