import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../styles/css/covid19.css'

interface Props {

}

const Covid19: React.FC<Props> = ({ }) => {
    const [topData, setTopData] = useState<{ data: any }>({ data: {} })
    useEffect(() => {
        axios.get('https://api.covid19api.com/world/total')
            .then(res => {
                let data = {
                    total: res.data.TotalConfirmed,
                    current: res.data.TotalConfirmed - res.data.TotalDeaths - res.data.TotalRecovered,
                    deaths: res.data.TotalDeaths,
                    recovered: res.data.TotalRecovered
                }
                setTopData({ data })
                console.log(data)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='main-container'>
            <div>
                <a>TOTAL CASES</a><br />
                <a>{topData.data.total}</a>
            </div>
            <div>
                <a>CURRENT CASES</a><br />
                <a>{topData.data.current}</a>
            </div>
            <div>
                <a>TOTAL DEATHS</a><br />
                <a>{topData.data.deaths}</a>
            </div>
            <div>
                <a>TOTAL RECOVERED</a><br />
                <a>{topData.data.recovered}</a>
            </div>
        </div>
    )
}

export default Covid19;

