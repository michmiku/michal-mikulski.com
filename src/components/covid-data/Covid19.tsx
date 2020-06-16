import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../styles/css/covid19.css'
import Cases from "./Cases";
import CountryList from "./CountryList"
import Chart from "./Chart";

interface Props {
    country: {
        country: string;
        slug: string;
        flag: string
    };
    setCountry: React.Dispatch<React.SetStateAction<{
        country: string;
        slug: string;
        flag: string
    }>>;
    data: any;
    setData: React.Dispatch<any>
}

const Covid19: React.FC<Props> = ({ }) => {
    const [country, setCountry] = useState<{ country: string, slug: string, flag: string }>({ country: "World", slug: 'world', flag: '' })
    const [data, setData] = useState<any>()

    return (
        <div className="main-container">
            <div className="row">
                <div className="col">
                    <div className="row ">
                        <div className="col data-columns">
                            <Cases country={{ country: "World", slug: 'world' }} setData={setData} />
                        </div>
                        <div className="col data-columns">
                            <Cases country={country} setData={setData} />
                        </div>
                    </div>
                </div>
                <div className="col-6 chart-col">
                    <h2>{country.country}</h2>
                    <div className="chart-container"><Chart country={country} data={data} /></div>
                </div>
                <div className="col countryList">
                    <CountryList country={country} setCountry={setCountry} />
                </div>
            </div>
        </div>
    )
}

export default Covid19;
