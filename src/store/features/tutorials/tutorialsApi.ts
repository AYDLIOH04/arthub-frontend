import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITutorial } from '@/models';
import getCookieData from '@/utils/get-cookie';

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const tutorialsApi = createApi({
  reducerPath: 'tutorialsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Tutorials'],
  endpoints: (builder) => ({
    getTutorials: builder.query<{ response: ITutorial[], totalCount: number }, { difficulty?: string, search?: string, like?: boolean, page: number; size: number }>({
      query: ({ page = 1, size = 16, difficulty, search, like }) => ({
        url: `/tutorials${like ? '/like' : ''}?page=${page}&size=${size}${difficulty ? `&${difficulty}` : ''}${search ? `&${search}` : ''}`,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`
        },
      }),
      providesTags: result => ['Tutorials'],
    }),
    getTutorial: builder.query<ITutorial, { id: string, like: boolean }>({
      query: ({ id, like }) => ({
        url: `tutorials/${id}${like ? '/liked' : ''}`,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`
        },
      }),
      providesTags: result => ['Tutorials'],
    }),
    addToFavorite: builder.mutation<void, { tutorial: ITutorial }>({
      query: ({ tutorial }) => ({
        url: `/tutorials/${tutorial.id}/add-favorite`,
        method: 'POST',
        body: tutorial,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`,
        },
      }),
      invalidatesTags: result => ['Tutorials'],
    }),
  }),
});

export const {
  useGetTutorialsQuery,
  useGetTutorialQuery,
  useAddToFavoriteMutation
} = tutorialsApi;
