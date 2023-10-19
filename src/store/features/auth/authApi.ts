import { ICredential } from '@/models/ICredential';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5000';

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

    // logout: builder.mutation({
    //   query: () => ({
    //     url: '/signout',
    //     method: 'POST',
    //   }),
    // }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
