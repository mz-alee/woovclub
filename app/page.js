"use client";
import React from "react";
import Landingpage from "./Landingpage";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const page = () => {
  const { data ,isLoading} = useQuery({
    queryKey: "products",
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });
  if(isLoading){
    console.log("loading");
    
  }else{
    console.log("loaded");
    
  }
  console.log(data);
  
  return (
    <>
      <div>
        <Landingpage />
      </div>
    </>
  );
};

export default page;
