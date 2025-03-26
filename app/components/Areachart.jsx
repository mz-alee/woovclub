"use client";
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, defs, linearGradient, stop } from "recharts";

const data = [
  { name: "Jan", value: 300 },
  { name: "Feb", value: 600 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 800 },
  { name: "May", value: 900 },
];

const MyAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data} margin={{right:0,left:0}}>
        <defs>
          <linearGradient id="colorValue" x1="1" y1="0" x2="0" y2="1">
            <stop offset="15%" stopColor="rgb(217, 185, 69)" stopOpacity={1} />
            <stop offset="90%" stopColor="rgb(116, 64, 173)" stopOpacity={0.5} />
          </linearGradient>
        </defs>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="name" /> */}
        {/* <YAxis /> */}
        <Tooltip />
        {/* <Legend /> */}
        <Area type="monotone" dataKey="value" stroke="rgb(217, 185, 69)" fillOpacity={3} fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MyAreaChart;
  