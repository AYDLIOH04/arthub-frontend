import { IProgram } from '@/models';
import { IProgramFull } from '@/models/IProgram';
import getCookieData from '@/utils/get-cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:7000';

export const programsApi = createApi({
  reducerPath: 'programsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Programs'],
  endpoints: (builder) => ({
    getPrograms: builder.query<IProgram[], { system?: string, search?: string, like?: boolean }>({
      query: ({ system, search, like }) => ({
        url: `/programs${like ? '/like' : ''}${system ? `?${system}` : ''}${search ? `${system ? '&' : '?'}${search}` : ''}`,
      }),
      providesTags: result => ['Programs'],
    }),
    getProgram: builder.query<IProgramFull, { program: string }>({
      query: ({ program }) => ({
        url: `/programs/${program}`,
      }),
    }),
    addToFavorite: builder.mutation<void, { program: IProgram }>({
      query: ({ program }) => ({
        url: `/programs/${program.id}/add-favorite`,
        method: 'POST',
        body: program,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`
        },
      }),
      invalidatesTags: result => ['Programs'],
    }),
  }),
});

export const {
  useGetProgramsQuery,
  useGetProgramQuery,
  useAddToFavoriteMutation,
} = programsApi;
