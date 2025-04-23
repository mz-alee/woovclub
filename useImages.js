"use client";
import React, { useState, useEffect } from "react";

const useImages = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/Images.json");

        if (!res.ok) {
          console.log("Failed to fetch data");
          return;
        }

        const images = await res.json();
        setdata(images);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);
  return [data]
};

export default useImages;
