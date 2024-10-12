import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const lineChartData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 7000 },
  { name: 'May', revenue: 6000 },
];

export default function LineChartComponent() {
  return (
    <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '8px', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={lineChartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
