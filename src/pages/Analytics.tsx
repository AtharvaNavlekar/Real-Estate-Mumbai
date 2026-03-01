import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, BarChart3, Activity, PieChart } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const marketTrendData = [
  { month: 'Jan', bandra: 82000, bkc: 71000, worli: 91000 },
  { month: 'Feb', bandra: 82500, bkc: 71500, worli: 91500 },
  { month: 'Mar', bandra: 83000, bkc: 72000, worli: 92000 },
  { month: 'Apr', bandra: 83500, bkc: 72500, worli: 92500 },
  { month: 'May', bandra: 84000, bkc: 73000, worli: 93000 },
  { month: 'Jun', bandra: 84500, bkc: 74000, worli: 94000 },
  { month: 'Jul', bandra: 85000, bkc: 75000, worli: 95000 },
];

const propertyTypeData = [
  { name: '1 BHK', demand: 4000, supply: 2400 },
  { name: '2 BHK', demand: 3000, supply: 1398 },
  { name: '3 BHK', demand: 2000, supply: 9800 },
  { name: '4+ BHK', demand: 2780, supply: 3908 },
];

export default function Analytics() {
  return (
    <div className="w-full">
      <div className="mb-10">
        <h1 className="text-3xl font-display font-bold text-v-black mb-2 tracking-tight">
          Market Analytics
        </h1>
        <p className="text-sm text-slate-500 font-medium max-w-3xl">
          Data-driven insights into Mumbai's real estate market. Track price trends, demand-supply dynamics, and make informed investment decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm flex flex-col justify-between h-40">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Avg Property Price</p>
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-v-blue" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-display font-bold text-v-black">₹ 3.5 Cr</h3>
            <p className="text-sm font-bold text-green-600 mt-1">+4.2% YoY</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm flex flex-col justify-between h-40">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Active Listings</p>
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-v-blue" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-display font-bold text-v-black">12,450</h3>
            <p className="text-sm font-bold text-red-500 mt-1">-1.5% MoM</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm flex flex-col justify-between h-40">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Avg Days on Market</p>
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <Activity className="w-5 h-5 text-v-blue" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-display font-bold text-v-black">45 Days</h3>
            <p className="text-sm font-bold text-green-600 mt-1">-5 Days YoY</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm flex flex-col justify-between h-40">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Rental Yield</p>
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
              <PieChart className="w-5 h-5 text-v-blue" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-display font-bold text-v-black">3.8%</h3>
            <p className="text-sm font-bold text-green-600 mt-1">+0.2% YoY</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
          <h3 className="text-2xl font-display font-bold text-v-black mb-6">Price Trends by Micro-Market</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketTrendData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dx={-10} tickFormatter={(value) => `₹${value / 1000}k`} />
                <Tooltip
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Line type="monotone" dataKey="bandra" name="Bandra West" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="bkc" name="BKC" stroke="#0f172a" strokeWidth={3} dot={{ r: 4, fill: '#0f172a', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="worli" name="Worli" stroke="#94a3b8" strokeWidth={3} dot={{ r: 4, fill: '#94a3b8', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
          <h3 className="text-2xl font-display font-bold text-v-black mb-6">Demand vs Supply by Typology</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={propertyTypeData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dx={-10} />
                <Tooltip
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                  cursor={{ fill: '#f8fafc' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="demand" name="Demand (Searches)" fill="#2563eb" radius={[4, 4, 0, 0]} />
                <Bar dataKey="supply" name="Supply (Listings)" fill="#0f172a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
