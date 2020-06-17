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
    data: any,
    chartSize: any,

}
const Chart: React.FC<Props> = ({ data, chartSize, country }) => {
    const [lines, setLines] = useState()
    useEffect(() => {
        var lines: any = []
        if (data !== undefined) {
            let recovered: number = 0
            data.map((item: any) => {
                if (item.Province !== "") {
                    recovered += item.Recovered
                }
                if (item.Province === "") {
                    if (item.Recovered !== 0) {
                        recovered = item.Recovered
                    }
                    lines.push({ name: item.Date.slice(5, 10), confirmed: item.Confirmed, deaths: item.Deaths, recovered: recovered, active: item.Confirmed - item.Deaths - item.Recovered })
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
        <div className="chart" style={{ width: chartSize.width + 50, height: chartSize.height + 50 }}>
            <h2>{country.country}</h2>

            <LineChart
                width={chartSize.width}
                height={chartSize.height}
                data={lines}
                margin={{
                    top: 5, bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="confirmed" stroke="black" dot={false} />
                <Line type="monotone" dataKey="deaths" stroke="red" dot={false} />
                <Line type="monotone" dataKey="recovered" stroke="rgb(139, 241, 139)" dot={false} />
                <Line type="monotone" dataKey="active" stroke="blue" dot={false} />

            </LineChart>
        </div>

    )
}

export default Chart;

