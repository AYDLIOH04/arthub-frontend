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
    getPrograms: builder.query<IProgram[], void>({
      query: () => ({
        url: 'programs',
      }),
    }),
    getProgram: builder.query<IProgramFull, { program: string }>({
      query: ({ program }) => ({
        url: `programs/${program}`,
      }),
    }),
    sortPrograms: builder.query<IProgram[], { system: string }>({
      query: ({ system }) => ({
        url: `programs?system=${system}`,
      }),
      providesTags: result => ['Programs'],
    }),
    searchPrograms: builder.query<IProgram[], { search: string }>({
      query: ({ search }) => ({
        url: `programs?search=${search}`,
      }),
      providesTags: result => ['Programs'],
    }),
    addToFavorite: builder.query<void, { program: IProgram }>({
      query: ({ program }) => ({
        url: `/programs/${program.id}/add-favorite`,
        method: 'POST',
        body: program,
        headers: {
          Authorization: `Bearer ${getCookieData('auth-data').token}`
        },
      }),
    }),
  }),
});

export const {
  useGetProgramsQuery,
  useGetProgramQuery,
  useSortProgramsQuery,
  useSearchProgramsQuery,
  useAddToFavoriteQuery
} = programsApi;
