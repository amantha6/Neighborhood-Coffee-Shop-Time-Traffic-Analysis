import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CoffeeTrafficAnalysis = () => {
  const generateTrafficData = () => {
    const hours = Array.from({ length: 15 }, (_, i) => i + 6);
    return hours.map(hour => ({
      hour: `${hour}:00`,
      morningPeakShops: Math.sin((hour - 8) * 0.5) * 40 + 50,
      afternoonPeakShops: Math.sin((hour - 14) * 0.5) * 35 + 45,
      steadyShops: Math.sin((hour - 11) * 0.3) * 20 + 35,
    }));
  };

  const trafficData = generateTrafficData();

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Coffee Shop Daily Traffic Patterns</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trafficData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis label={{ value: 'Customers/Hour', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="morningPeakShops" name="Morning Peak (12 shops)" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="afternoonPeakShops" name="Afternoon Peak (10 shops)" stroke="#82ca9d" strokeWidth={2} />
            <Line type="monotone" dataKey="steadyShops" name="Steady Traffic (8 shops)" stroke="#ffc658" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CoffeeTrafficAnalysis;