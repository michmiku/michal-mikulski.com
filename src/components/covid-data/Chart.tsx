import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../styles/css/covid19.css'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


interface Props {
    country: {
        country: string;
        slug: string;
    };
    data: any
}
const Chart: React.FC<Props> = ({ data }) => {
    const [lines, setLines] = useState()
    useEffect(() => {
        const lines:any=[]
        if(data!==undefined){
        data.map((item:any,key:number)=>{
            lines.push({name:key,confirmed:item.Confirmed,deaths:item.Deaths,recovered:item.Recovered,active:item.Confirmed-item.Deaths-item.Recovered})
            setLines(lines)
            console.log()
        })
    }
    },[data])



    return (
        <LineChart
            width={600}
            height={400}
            data={lines}
            margin={{
                top: 5, bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="confirmed" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
            <Line type="monotone" dataKey="recovered" stroke="red" />
            <Line type="monotone" dataKey="active" stroke="black" />

        </LineChart>
    )
}

export default Chart;

