import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SkillsChart = () => {
  const data = [
    {
      name: "ReactJS",
      Experience: 85,
    },
    {
      name: "Javascript",
      Experience: 90,
    },
    {
      name: "NodeJs",
      Experience: 75,
    },
    {
      name: "HTML/CSS",
      Experience: 80,
    },
    {
      name: "SQL",
      Experience: 70,
    },
    {
      name: "Photoshop",
      Experience: 65,
    },
  ];
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  return (
    <BarChart
      width={vw > 800 ? 800 : vw}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Experience" stackId="a" fill="#888888" />
    </BarChart>
  );
};

export default SkillsChart;
