"use client";
import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer, linearGradient, stop } from "recharts";

const data = [
  { name: "Jan", value: 300 },
  { name: "Feb", value: 500 },
  { name: "Mar", value: 400 },
  { name: "Apr", value: 600 },
  { name: "May", value: 300 },
  { name: "jun", value: 800 },
  { name: "jun", value: 600 },
  { name: "july", value: 900 },
];

const BlueAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ right: 0, left: 0 }}>
        <defs>
          <linearGradient id="bluecolorValue" x1="1" y1="0" x2="0" y2="1">
            <stop offset="15%" stopColor="rgb(62, 157, 187)" stopOpacity={1} />
            <stop offset="90%" stopColor="rgb(49, 108, 127)" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="rgb(62, 157, 187)" fillOpacity={1} fill="url(#bluecolorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BlueAreaChart;
