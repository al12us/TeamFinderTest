import { baseApi } from 'src/app/base-api';

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signin: build.mutation({
      query: (credentials) => ({
        url: 'auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useSigninMutation } = userApi;
