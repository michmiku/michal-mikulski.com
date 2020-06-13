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
        var lines: any = []
        console.log(data)
        if (data !== undefined) {
            data.map((item: any, key: number) => {
                if (item.Province === "") {
                    lines.push({ name: item.Date.slice(0, 10), confirmed: item.Confirmed, deaths: item.Deaths, recovered: item.Recovered, active: item.Confirmed - item.Deaths - item.Recovered })
                    setLines(lines)
                }
            })
        }
        if (data !== undefined && data.length === 0) {
            lines = []
            setLines(lines)
        }
    }, [data])



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
            <Line type="monotone" dataKey="confirmed" stroke="black" />
            <Line type="monotone" dataKey="deaths" stroke="red" />
            <Line type="monotone" dataKey="recovered" stroke="rgb(139, 241, 139)" />
            <Line type="monotone" dataKey="active" stroke="blue" />

        </LineChart>
    )
}

export default Chart;

