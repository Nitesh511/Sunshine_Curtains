import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Apidata=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:`${process.env.STRAPI_API}`,
        prepareHeaders: (headers) => {
            headers.set(
              "Authorization",
              "Bearer 02fda2b3ea1d2498a40e607d14bdf2e2cdab0ded72ad05d0b90ede4198fa9e8da8e8d2b4233112a77ed7c844628a225905364144fbac681c83bedf94142ca38bc159b75eb04e8d4ca739fff354442019c9838ae3a7442bfb2a35b3770cc2f3a45fb7c3426b12af42c6f54d3504aa116e4f9809768e0c23ae383ead3d99b27c13"
            );
            headers.set("Content-Type", "application/json");
            return headers;
          },

    }),
    endpoints:(builder)=>({
        getblinds:builder.query({query:()=>"/api/blinds?populate=*"}),
        getblindproducts:builder.query({query:()=>"/api/blindproducts?populate=*"}),
    })
})

export default Apidata;

export const {useGetblindsQuery,useGetblindproductsQuery}=Apidata;

