import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = `http://127.0.0.1:8000/api`

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
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
