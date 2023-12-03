import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IReference } from '@/models';
import getCookieData from '@/utils/get-cookie';

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const referencesApi = createApi({
  reducerPath: 'referencesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['References'],
  endpoints: (builder) => ({
    getReferences: builder.query<IReference[], { page?: number; size?: number }>({
      query: ({ page = 1, size = 10 }) => ({
        url: 'references',
        params: { page, size },
      }),
      providesTags: result => ['References'],
    }),
    getReference: builder.query<IReference, { id: number }>({
      query: ({ id }) => ({
        url: `references/${id}`,
      }),
    }),
    sortReferences: builder.query<IReference[], { tag: string; page?: number; size?: number }>({
      query: ({ tag, page = 1, size = 10 }) => ({
        url: '/references',
        params: { tag, page, size },
      }),
      providesTags: result => ['References'],
    }),
    searchReferences: builder.query<IReference[], { search: string; page?: number; size?: number }>({
      query: ({ search, page = 1, size = 10 }) => ({
        url: '/references',
        params: { search, page, size },
      }),
      providesTags: result => ['References'],
    }),
    addToFavoriteReference: builder.query<void, { reference: IReference }>({
      query: ({ reference }) => ({
        url: `/references/${reference.id}/add-favorite`,
        method: 'POST',
        body: reference,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetReferencesQuery,
  useGetReferenceQuery,
  useSortReferencesQuery,
  useSearchReferencesQuery,
  useAddToFavoriteReferenceQuery,
} = referencesApi;
