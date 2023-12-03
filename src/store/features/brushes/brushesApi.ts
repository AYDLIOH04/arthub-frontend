import { IBrush } from '@/models';
import getCookieData from '@/utils/get-cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const brushesApi = createApi({
  reducerPath: 'brushesApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['Brushes'],
  endpoints: (builder) => ({
    getBrushes: builder.query<{ response: IBrush[], totalCount: number }, { program?: string, search?: string, like?: boolean, page: number; size: number }>({
      query: ({ page = 1, size = 16, program, search, like }) => ({
        url: `/brushes${like ? '/like' : ''}?page=${page}&size=${size}${program ? `&${program}` : ''}${search ? `&${search}` : ''}`,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`
        },
      }),
      providesTags: result => ['Brushes'],
    }),
    getBrush: builder.query<IBrush, { id: number }>({
      query: ({ id }) => ({
        url: `/brushes/${id}`,
      }),
    }),
    addToFavorite: builder.mutation<void, { brush: IBrush }>({
      query: ({ brush }) => ({
        url: `/brushes/${brush.id}/add-favorite`,
        method: 'POST',
        body: brush,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`
        },
      }),
      invalidatesTags: result => ['Brushes'],
    }),
  }),
});

export const {
  useGetBrushesQuery,
  useGetBrushQuery,
  useAddToFavoriteMutation,
} = brushesApi;
