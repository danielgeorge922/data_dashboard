import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const barChartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 700 },
  { name: 'May', value: 600 },
];

export default function BarChartComponent() {
  return (
    <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '8px', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barChartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
