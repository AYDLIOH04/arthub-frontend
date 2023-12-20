import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IReference } from '@/models';
import getCookieData from '@/utils/get-cookie';

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const referencesApi = createApi({
  reducerPath: 'referencesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['References'],
  endpoints: (builder) => ({
    getReferences: builder.query<{ response: IReference[], totalCount: number }, { page?: number; size?: number, tag?: string, like?: boolean }>({
      query: ({ page = 1, size = 100, tag, like }) => ({
        url: `references${like ? '/like' : ''}?page=${page}&size=${size}${tag ? `&${tag}` : ''}`,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`
        },
      }),
      providesTags: result => ['References'],
    }),
    addToFavorite: builder.mutation<void, { reference: IReference }>({
      query: ({ reference }) => ({
        url: `/references/${reference.id}/add-favorite`,
        method: 'POST',
        body: reference,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`,
        },
      }),
      invalidatesTags: result => ['References'],
    }),
  }),
});

export const {
  useGetReferencesQuery,
  useAddToFavoriteMutation,
} = referencesApi;
