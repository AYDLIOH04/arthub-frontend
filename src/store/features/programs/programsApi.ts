import { IProgram } from '@/models';
import { IProgramFull, IProgramSelect } from '@/models/IProgram';
import { getCookieData } from '@/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const programsApi = createApi({
  reducerPath: 'programsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Programs'],
  endpoints: (builder) => ({
    getPrograms: builder.query<IProgram[], { system?: string, search?: string, like?: boolean }>({
      query: ({ system, search, like }) => ({
        url: `/programs${like ? '/like' : ''}${system ? `?${system}` : ''}${search ? `${system ? '&' : '?'}${search}` : ''}`,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`
        },
      }),
      providesTags: result => ['Programs'],
    }),
    getProgram: builder.query<IProgramFull, { program: string }>({
      query: ({ program }) => ({
        url: `/programs/${program}`,
      }),
    }),
    getProgramsToSelect: builder.query<IProgramSelect, void>({
      query: () => ({
        url: `/programs/select`,
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
