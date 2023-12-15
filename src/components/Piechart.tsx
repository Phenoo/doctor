"use client"

import { Dot } from 'lucide-react';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { GoDotFill } from "react-icons/go";

const data = [
  { name: 'Male ', value: 400 },
  { name: 'Female', value: 300 },
  { name: 'children', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const Piechartcomponent = () => {
    // static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    return (
      <div className='w-full flex flex-col justify-center items-center bg-background'>
       <ResponsiveContainer width={"100%"} height={200}>
       <PieChart  >
          <Pie
            data={data}

            innerRadius={60}
            outerRadius={80}
            fill="#ffffff"
            paddingAngle={0}
            dataKey="value"

          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Sector name="Group A"stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />

          <Tooltip />

        </PieChart>
      
       </ResponsiveContainer>
       <div className='space-x-4 flex'>
        <div className='flex items-center'>
          <span className=' text-[#0088FE] text-2xl'><GoDotFill size={20} /></span>
          Male</div>   
        <div className='flex items-center'>
          <span className=' text-[#00C49f] text-2xl'><GoDotFill size={20} /></span>
          Female</div>   
        <div className='flex items-center'>
          <span className=' text-[#FFBB28] text-2xl'><GoDotFill size={20} /></span>
          Child
        </div>   
        </div>
      </div>
      );
}



export default Piechartcomponent