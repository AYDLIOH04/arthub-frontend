import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IReference } from '@/models';
import getCookieData from '@/utils/get-cookie';

const baseUrl = 'http://localhost:7000';

export const referencesApi = createApi({
  reducerPath: 'referencesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['References'],
  endpoints: (builder) => ({
    getReferences: builder.query<IReference[], { page?: number; pageSize?: number }>({
      query: ({ page = 1, pageSize = 10 }) => ({
        url: 'references',
        params: { page, pageSize },
      }),
      providesTags: result => ['References'],
    }),
    getReference: builder.query<IReference, { id: number }>({
      query: ({ id }) => ({
        url: `references/${id}`,
      }),
    }),
    sortReferences: builder.query<IReference[], { program: string; page?: number; pageSize?: number }>({
      query: ({ program, page = 1, pageSize = 10 }) => ({
        url: '/references',
        params: { program, page, pageSize },
      }),
      providesTags: result => ['References'],
    }),
    searchReferences: builder.query<IReference[], { search: string; page?: number; pageSize?: number }>({
      query: ({ search, page = 1, pageSize = 10 }) => ({
        url: '/references',
        params: { search, page, pageSize },
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
