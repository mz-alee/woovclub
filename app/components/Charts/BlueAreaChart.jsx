"use client";
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, defs, linearGradient, stop } from "recharts";

const data = [
  { name: "Jan", value: 300 },
  { name: "Feb", value: 800 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 1100 },
  { name: "May", value: 900 },
];

const BlueAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{right:0,left:0}}>
        <defs>
          <linearGradient id="colorValue" x1="1" y1="0" x2="0" y2="1">
            <stop offset="15%" stopColor="rgb(62, 157, 187)" stopOpacity={1} />
            <stop offset="90%" stopColor="rgb(49, 108, 127)" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="name" /> */}
        {/* <YAxis /> */}
        <Tooltip />
        {/* <Legend /> */}
        <Area type="monotone" dataKey="value" stroke="rgb(62, 157, 187)" fillOpacity={3} fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BlueAreaChart;
  