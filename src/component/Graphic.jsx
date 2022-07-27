import React from 'react';
import { AreaChart, Tooltip, Area, ResponsiveContainer, YAxis, XAxis, Legend } from 'recharts';
import { formatterDolar } from './formatterDolar';

export default function Graphic( { data } ) {
    const date = (hours)=>{
        const d = new Date();
        d.setHours(hours);
        return d.toString().slice(0, 18);
    }

    function CustomTooltip({ label, active }) {
        if (active) {
          return (
            <div className="custom-tooltip">
              <p className="label">{date(-168 + label) + "h"}</p>
              <h3 className="desc">{data[label] < 0.85 ? "$" + data[label].toFixed(8) + " USD" :
              formatterDolar.format(data[label].toFixed(2)) + " USD"}</h3>
            </div>
          );
        }
        return null;
      }

      const data1 = [];
      data.map((x,i)=>(
          data1.push({
          name: i, 
          price: x},)   
      ));


    return (
        <>
        <ResponsiveContainer height={300} width="100%">
          <AreaChart
            width={500}
            height={400}
            data={data1}
            margin={{
              top: 0
            }}
          >
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#ee3b3b" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#ee3b3b11" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <YAxis type="number" domain={['auto', 'auto']} mirror tickCount={7} opacity={0.5} />
            <XAxis hide={true} />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={36}/>
            <Area
              type="natural"
              name="last 7 days"
              dataKey="price"
              stroke="#ee3b3b"
              fill="url(#colorview)"
            />
          </AreaChart>
        </ResponsiveContainer>
        </>
    );
  }
