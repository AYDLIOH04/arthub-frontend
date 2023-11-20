import { IReference } from '@/models/IReferences';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:7000';

export const referencesApi = createApi({
  reducerPath: 'referencesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getReferences: builder.query<IReference[], void>({
      query: () => ({
        url: 'references',
      }),
    }),
    getReference: builder.query<IReference, {id: number}>({
      query: ({id}) => ({
        url: `references/${id}`,
      })
    }),
  }),
});

export const {
  useGetReferencesQuery,
  useGetReferenceQuery,
} = referencesApi;
