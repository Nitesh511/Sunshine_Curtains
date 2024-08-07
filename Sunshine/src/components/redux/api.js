import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Apidata = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.STRAPI_API}`,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer 02fda2b3ea1d2498a40e607d14bdf2e2cdab0ded72ad05d0b90ede4198fa9e8da8e8d2b4233112a77ed7c844628a225905364144fbac681c83bedf94142ca38bc159b75eb04e8d4ca739fff354442019c9838ae3a7442bfb2a35b3770cc2f3a45fb7c3426b12af42c6f54d3504aa116e4f9809768e0c23ae383ead3d99b27c13"
      );
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getblinds: builder.query({ query: () => "/api/blinds?populate=*" }),
    getblindproducts: builder.query({
      query: () => "/api/blindproducts?populate=*",
    }),
    getreviews: builder.query({ query: () => "/api/reviews?populate=*" }),
    getdashboard: builder.query({ query: () => "/api/dashboards?populate=*" }),
    getabout: builder.query({ query: () => "/api/abouts?populate=*" }),
    getdashboardproducts: builder.query({
      query: () => "/api/dashboardproducts?populate=*",
    }),
    getfaq: builder.query({
      query: () => "/api/faqs?populate=*",
    }),
    getcurtains: builder.query({
      query: () => "/api/curtains?populate=*",
    }),
    getshutters: builder.query({
      query: () => "/api/shutters?populate=*",
    }),
    getawnings: builder.query({
      query: () => "/api/awnings?populate=*",
    }),
    getawningproducts: builder.query({
      query: () => "/api/awningproducts?populate=*",
    }),
  
    getblindproductdetails: builder.query({
    
      query: (slug) => "/api/blindproducts?filters[slug][$eq]=motorised-blinds&populate=*",
    })
     
  }),
});

export default Apidata;

export const {
  useGetblindsQuery,
  useGetblindproductsQuery,
  useGetreviewsQuery,
  useGetdashboardQuery,
  useGetaboutQuery,
  useGetdashboardproductsQuery,
  useGetfaqQuery,
  useGetcurtainsQuery,
  useGetshuttersQuery,
  useGetawningsQuery,
  useGetawningproductsQuery,
  useGetblindproductdetailsQuery
} = Apidata;
