import { IProgram } from '@/models/IProgram';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:7000';

export const programsApi = createApi({
  reducerPath: 'programsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPrograms: builder.query<IProgram[], void>({
      query: () => ({
        url: 'programs',
      }),
    }),
    getProgram: builder.query<IProgram, { program: string }>({
      query: ({ program }) => ({
        url: `programs/${program}`,
      })
    }),
  }),
});

export const {
  useGetProgramsQuery,
  useGetProgramQuery
} = programsApi;
