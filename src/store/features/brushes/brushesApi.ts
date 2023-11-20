import { IBrush } from '@/models/IBrush';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:7000';

export const brushesApi = createApi({
  reducerPath: 'brushesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Brushes'],
  endpoints: (builder) => ({
    getBrushes: builder.query<IBrush[], void>({
      query: () => ({
        url: 'brushes',
      }),
      providesTags: result => ['Brushes']
    }),
    getBrush: builder.query<IBrush, {id: number}>({
      query: ({id}) => ({
        url: `brushes/${id}`,
      })
    }),

    // createBrush: builder.mutation<IBrush, Partial<IBrush>>({
    //   query: (brushData) => ({
    //     url: 'brushes',
    //     method: 'POST',
    //     body: brushData,
    //   }),
    //   invalidatesTags: ['Brushes']
    // }),

    // updateBrush: builder.mutation<IBrush, { id: number; brushData: Partial<IBrush> }>({
    //   query: ({ id, brushData }) => ({
    //     url: `brushes/${id}`,
    //     method: 'PUT',
    //     body: brushData,
    //   }),
    //   invalidatesTags: ['Brushes']
    // }),

    // deleteBrush: builder.mutation<void, number>({
    //   query: (id) => ({
    //     url: `brushes/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Brushes']
    // }),

    // addToFavourites: builder.mutation<IBrush, { userId: number; brush: IBrush }>({
    //   query: ({ userId, brush }) => ({
    //     url: `users/${userId}/favourites`,
    //     method: 'POST',
    //     body: brush,
    //   }),
    // }),
  }),
});

export const {
  useGetBrushesQuery,
  useGetBrushQuery,
} = brushesApi;
