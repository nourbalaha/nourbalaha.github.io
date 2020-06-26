import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'ReactJS', Experience: 80,
  },
  {
    name: 'Javascript', Experience: 85,
  },
  {
    name: 'NodeJs', Experience: 70,
  },
  {
    name: 'HTML/CSS', Experience: 75,
  },
  {
    name: 'SQL', Experience: 65,
  },
  {
    name: 'Photoshop', Experience: 60,
  },
];

export default class SkillsChart extends PureComponent {
  render() {
    return (
      <BarChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
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
  }
}
