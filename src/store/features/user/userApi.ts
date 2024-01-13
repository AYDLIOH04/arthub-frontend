import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, IBrush, IReference, ITutorial, IProgram } from '@/models';
import { getCookieData } from '@/utils';

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getCookieData('auth-data').token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUserInfo: builder.query<IUser, void>({
      query: () => ({
        url: '/user/info',
      }),
      providesTags: result => result ? [{ type: 'User', id: result.id }] : [],
    }),
    getUserBrushes: builder.query<IBrush[], void>({
      query: () => ({
        url: '/user/brushes',
      }),
    }),
    getUserReferences: builder.query<IReference[], void>({
      query: () => ({
        url: '/user/references',
      }),
    }),
    getUserTutorials: builder.query<ITutorial[], void>({
      query: () => ({
        url: '/user/tutorials',
      }),
    }),
    getUserPrograms: builder.query<IProgram[], void>({
      query: () => ({
        url: '/user/programs',
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useGetUserBrushesQuery,
  useGetUserReferencesQuery,
  useGetUserTutorialsQuery,
  useGetUserProgramsQuery,
} = userApi;
