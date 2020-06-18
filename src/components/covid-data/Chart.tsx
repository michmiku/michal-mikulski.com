import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../styles/css/covid19.css'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { isString } from "lodash";


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
        if (country.country === "World" && data !== undefined) {
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
        else if (data !== undefined && data.length !== undefined) {

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
                        let date = item.Date.slice(5, 10)
                        let temp = date.split('')
                        date = temp[3] + temp[4] + temp[2] + temp[0] + temp[1]
                        lines.push({ name: item.Date.slice(5, 10), confirmed: item.Confirmed, deaths: item.Deaths, recovered: recovered, active: item.Confirmed - item.Deaths - item.Recovered })
                    }
                })
                setLines(lines)

            }
            if (data !== undefined && data.length === 0) {
                lines = []
                setLines(lines)
            }
        }

    }, [data, country])


    return (
        <div className="chart" style={{ width: chartSize.width + 60, height: chartSize.height + 50, padding: '5px' }}>
            <h2>{country.country}</h2>

            <LineChart
                width={chartSize.width}
                height={chartSize.height}
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
        </div>

    )
}

export default Chart;

