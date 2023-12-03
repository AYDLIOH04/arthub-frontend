import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITutorial } from '@/models';
import getCookieData from '@/utils/get-cookie';

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const tutorialsApi = createApi({
  reducerPath: 'tutorialsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Tutorials'],
  endpoints: (builder) => ({
    getTutorials: builder.query<ITutorial[], { page?: number; size?: number }>({
      query: ({ page = 1, size = 10 }) => ({
        url: 'tutorials',
        params: { page, size },
      }),
      providesTags: result => ['Tutorials'],
    }),
    getTutorial: builder.query<ITutorial, { id: number }>({
      query: ({ id }) => ({
        url: `tutorials/${id}`,
      }),
    }),
    sortTutorials: builder.query<ITutorial[], { program: string; page?: number; size?: number }>({
      query: ({ program, page = 1, size = 10 }) => ({
        url: '/tutorials',
        params: { program, page, size },
      }),
      providesTags: result => ['Tutorials'],
    }),
    searchTutorials: builder.query<ITutorial[], { search: string; page?: number; size?: number }>({
      query: ({ search, page = 1, size = 10 }) => ({
        url: '/tutorials',
        params: { search, page, size },
      }),
      providesTags: result => ['Tutorials'],
    }),
    addToFavoriteTutorial: builder.query<void, { tutorial: ITutorial }>({
      query: ({ tutorial }) => ({
        url: `/tutorials/${tutorial.id}/add-favorite`,
        method: 'POST',
        body: tutorial,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetTutorialsQuery,
  useGetTutorialQuery,
  useSortTutorialsQuery,
  useSearchTutorialsQuery,
  useAddToFavoriteTutorialQuery,
} = tutorialsApi;
