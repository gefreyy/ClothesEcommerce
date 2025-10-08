import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_URL = import.meta.env.VITE_API_URL;

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => '/brands',
    }),
    getGenders: builder.query({
      query: () => '/genders',
    }),
    getCategories: builder.query({
      query: () => '/categories',
    }),
    getProducts: builder.query({
      query: ({ page = 1, filters = '' }) => 
        `/products?page=${page}&${filters}`,
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { 
  useGetProductsQuery, 
  useGetBrandsQuery, 
  useGetGendersQuery, 
  useGetCategoriesQuery,
  useGetProductByIdQuery 
} = productsApi;
