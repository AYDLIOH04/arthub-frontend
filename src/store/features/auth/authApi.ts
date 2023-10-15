import { ICredential } from '@/store/models/ICredential';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5000/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: ICredential) => ({
        url: '/signin',
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

export const { useLoginMutation } = authApi;
