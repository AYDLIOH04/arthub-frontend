import { IBrush } from '@/models';
import getCookieData from '@/utils/get-cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:7000';

export const brushesApi = createApi({
  reducerPath: 'brushesApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['Brushes'],
  endpoints: (builder) => ({
    getBrushes: builder.query<{ response: IBrush[], totalCount: number }, { program?: string, search?: string, page: number; size: number }>({
      query: ({ page = 1, size = 16, program, search }) => ({
        url: `/brushes?page=${page}?size=${size}${program ? `&${program}` : ''}${search ? `&${search}` : ''}`,
      }),
      providesTags: result => ['Brushes'],
    }),
    getBrush: builder.query<IBrush, { id: number }>({
      query: ({ id }) => ({
        url: `/brushes/${id}`,
      }),
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
  useAddToFavoriteQuery,
} = brushesApi;
