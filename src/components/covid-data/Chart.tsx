import React, { useState, useEffect, useRef } from "react";
import '../../styles/css/covid19.css'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


interface Props {
    country: {
        country: string;
        slug: string;
        flag: any;
    };
    data: any,
    chartSize: any,

}
const Chart: React.FC<Props> = ({ data, chartSize, country }) => {
    const [lines, setLines] = useState()
    const [count, setCount] = useState(0)
    useEffect(() => {
        var lines: any = []
        if ((country.country === "World" && data !== undefined && count === 0)) {
            setCount(1)
            let cases = Object.entries(data.cases)
            cases.map((item: any, key: number) => {
                let date: any = Object.entries(data.deaths)[key][0].slice(0, 4).replace('/', '-').replace('/', '')
                let temp = date.split('')
                if (temp.length === 3) {
                    date = '0' + temp[2] + temp[1] + '0' + temp[0]
                }
                else if (temp.length === 4) {
                    date = temp[2] + temp[3] + temp[1] + '0' + temp[0]
                }
                let deaths: any = Object.entries(data.deaths)[key][1]
                let recovered: any = Object.entries(data.recovered)[key][1]
                let active = (item[1] - deaths - recovered)
                lines.push({ name: date, confirmed: item[1], deaths: deaths, recovered: recovered, active: active })
            })
            setLines(lines)
        }
        else if ((data !== undefined && country.country !== "World" && Object.entries(data.cases)[0][1] !== 555)) {
            let cases = Object.entries(data.cases)
            cases.map((item: any, key: number) => {
                let date: any = Object.entries(data.deaths)[key][0].slice(0, 4).replace('/', '-').replace('/', '')
                let temp = date.split('')
                if (temp.length === 3) {
                    date = '0' + temp[2] + temp[1] + '0' + temp[0]
                }
                else if (temp.length === 4) {
                    date = temp[2] + temp[3] + temp[1] + '0' + temp[0]
                }
                let deaths: any = Object.entries(data.deaths)[key][1]
                let recovered: any = Object.entries(data.recovered)[key][1]
                let active = (item[1] - deaths - recovered)
                lines.push({ name: date, confirmed: item[1], deaths: deaths, recovered: recovered, active: active })
            })
            setLines(lines)
        }
    }, [data])
    const chart: any = useRef(null)


    return (
        <div className="chart" ref={chart}>
            {chart.current !== null ? <ResponsiveContainer width='100%' height={chart.current.offsetHeight}>

                <LineChart

                    data={lines}
                    margin={{
                        top: 5, bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="confirmed" stroke="black" dot={false} />
                    <Line type="monotone" dataKey="deaths" stroke="red" dot={false} />
                    <Line type="monotone" dataKey="recovered" stroke="rgb(139, 241, 139)" dot={false} />
                    <Line type="monotone" dataKey="active" stroke="blue" dot={false} />

                </LineChart>
            </ResponsiveContainer> : null
            }

        </div>

    )
}

export default Chart;

