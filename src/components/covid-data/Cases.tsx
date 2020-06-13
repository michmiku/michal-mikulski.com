import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../styles/css/covid19.css'

interface Props {
    country:{
        country: string;
        slug: string;
    };
    setData:React.Dispatch<any>
}

const Cases: React.FC<Props> = ({ country,setData }) => {
    const [topData, setTopData] = useState<{ data: any }>({ data: {} })
    useEffect(() => {
        if(country.country==="World"){
            axios.get('https://api.covid19api.com/world/total')
            .then(res => {
                let data = {
                    total: res.data.TotalConfirmed,
                    current: res.data.TotalConfirmed - res.data.TotalDeaths - res.data.TotalRecovered,
                    deaths: res.data.TotalDeaths,
                    recovered: res.data.TotalRecovered
                }
                setTopData({ data })
            })
            .catch(err => console.log(err));
        }
        else{
            axios.get('https://api.covid19api.com/country/'+country.slug)
            .then(res => {
                if(res.data[0]===undefined){
                    let data = {
                        total: 'No data',
                        current: 'No data',
                        deaths: 'No data',
                        recovered: 'No data'
                    }
                    setTopData({ data })
                }
                else{
                    var x=1
                    while(res.data[res.data.length-x].Province!==""){
                        x++
                    }
                    let data = {
                        total: res.data[res.data.length-x].Confirmed,
                        current: res.data[res.data.length-x].Active,
                        deaths: res.data[res.data.length-x].Deaths,
                        recovered: res.data[res.data.length-x].Recovered
                    }
                    setTopData({ data })
                }
                setData(res.data)
            })
            .catch(err => console.log(err));
        }
    }, [country])

    return (
            <div className="data-container">
                <div className="world-data">
                    <div className="cases-text">TOTAL CASES</div><br />
                    <div className="cases-data">{topData.data.total}</div>
                </div>
                <div className="world-data" >
                    <div className="cases-text">TOTAL DEATHS</div><br />
                    <div className="cases-data">{topData.data.deaths}</div>
                </div>
                <div className="world-data">
                    <div className="cases-text">TOTAL RECOVERED</div><br />
                    <div className="cases-data">{topData.data.recovered}</div>
                </div>
                <div className="world-data">
                    <div className="cases-text">ACTIVE CASES</div><br />
                    <div className="cases-data">{topData.data.current}</div>
                </div>
            </div>
    )
}

export default Cases;

