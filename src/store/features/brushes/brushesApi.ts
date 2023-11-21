import { IBrush } from '@/models';
import getCookieData from '@/utils/get-cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:7000';

export const brushesApi = createApi({
  reducerPath: 'brushesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Brushes'],
  endpoints: (builder) => ({
    getBrushes: builder.query<IBrush[], { page?: number; pageSize?: number }>({
      query: ({ page = 1, pageSize = 16 }) => ({
        url: '/brushes',
        params: { page, pageSize },
      }),
      providesTags: result => ['Brushes'],
    }),
    getBrush: builder.query<IBrush, { id: number }>({
      query: ({ id }) => ({
        url: `/brushes/${id}`,
      }),
    }),
    sortBrushes: builder.query<IBrush[], { program: string; page?: number; pageSize?: number }>({
      query: ({ program, page = 1, pageSize = 16 }) => ({
        url: `/brushes`,
        params: { program, page, pageSize },
      }),
      providesTags: result => ['Brushes'],
    }),
    searchBrushes: builder.query<IBrush[], { search: string; page?: number; pageSize?: number }>({
      query: ({ search, page = 1, pageSize = 16 }) => ({
        url: `/brushes`,
        params: { search, page, pageSize },
      }),
      providesTags: result => ['Brushes'],
    }),
    addToFavorite: builder.query<void, { brush: IBrush }>({
      query: ({ brush }) => ({
        url: `/brushes/${brush.id}/add-favorite`,
        method: 'POST',
        body: brush,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`
        },
      }),
    }),
  }),
});

export const {
  useGetBrushesQuery,
  useGetBrushQuery,
  useSortBrushesQuery,
  useSearchBrushesQuery,
  useAddToFavoriteQuery,
} = brushesApi;
