import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const ridesApi = createApi({
  reducerPath: 'ridesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    // prepareHeaders: (headers, {getState}) => {
    //   // const token = getState()
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ['rides'],
  endpoints: builder => ({
    getAllRides: builder.query({
      query: () => 'posts',
    }),
    getRidesById: builder.query({
      query: id => `posts/${id}`,
    }),
    addRide: builder.mutation({
      query: body => ({
        url: `posts`,
        method: 'POST',
        body: body,
      }),
      // invalidatesTags
    }),
    updateRide: builder.mutation({
      query: ({id, ...rest}) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: rest,
      }),
    }),
  }),
});

export const {useGetAllRidesQuery, useGetRidesByIdQuery, useAddRideMutation} =
  ridesApi;
