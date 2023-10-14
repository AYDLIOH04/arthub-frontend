import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://example.com/api';

export const brushesApi = createApi({
  reducerPath: 'brushesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Brushes'],
  endpoints: (builder) => ({
    getAllBrushes: builder.query<IBrushes[], void>({
      query: () => 'brushes', 
      providesTags: result => ['Brushes']
    }),

    createBrush: builder.mutation<IBrushes, Partial<IBrushes>>({
      query: (brushData) => ({
        url: 'brushes',
        method: 'POST',
        body: brushData,
      }),
      invalidatesTags: ['Brushes']
    }),

    updateBrush: builder.mutation<IBrushes, { id: number; brushData: Partial<IBrushes> }>({
      query: ({ id, brushData }) => ({
        url: `brushes/${id}`,
        method: 'PUT',
        body: brushData,
      }),
      invalidatesTags: ['Brushes']
    }),

    deleteBrush: builder.mutation<void, number>({
      query: (id) => ({
        url: `brushes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Brushes']
    }),

    addToFavourites: builder.mutation<IBrushes, { userId: number; brush: IBrushes }>({
      query: ({ userId, brush }) => ({
        url: `user/${userId}/favourites`,
        method: 'POST',
        body: brush,
      }),
    }),
  }),
});

export const {
  useGetAllBrushesQuery,
  useCreateBrushMutation,
  useUpdateBrushMutation,
  useDeleteBrushMutation,
  useAddToFavouritesMutation,
} = brushesApi;
