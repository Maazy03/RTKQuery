import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cobber-backend.herokuapp.com/api/v1/',
  }),
  // baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: builder => ({
    getAllUsers: builder.query({
      query: () => 'auth',
    }),
    getAllVehicles: builder.query({
      query: () => 'vehicle/',
    }),
    getUsersById: builder.query({
      query: id => `users/${id}`,
    }),
    loginUser: builder.mutation({
      query: body => ({
        url: `auth/login`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUsersByIdQuery,
  useLoginUserMutation,
  useAddPostMutation,
  useGetAllVehiclesQuery,
} = usersApi;
