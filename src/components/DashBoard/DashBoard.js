import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='flex justify-around'>

            <div>
                <h1 className='text-xl text-black font-semibold mr-8 mt-20'>Month of the sell in PieChart</h1>
            <PieChart width={800} height={240}>
  <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  <Tooltip />
</PieChart>
</div>
<div>
<h1 className='text-xl text-black font-semibold mr-80 mt-20 '>Month of the sell in BarChart</h1>

<BarChart width={400} height={400} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis dataKey="sell"  />
  <Tooltip />
  <Legend />
  <Bar dataKey="sell" fill="#8884d8" />
  
</BarChart>
            </div>
        </div>
    );
};

export default DashBoard;