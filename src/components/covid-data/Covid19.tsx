import React, { useState, useEffect } from "react";
import '../../styles/css/covid19.css'
import Cases from "./Cases";
import CountryList from "./CountryList"
import CountryTable from "./CountryTable"
import Map from "./Map"
import Chart from "./Chart";
import axios from 'axios'

interface Props {
    country: {
        country: string;
        slug: string;
        flag: string
    };
    setCountry: React.Dispatch<React.SetStateAction<{
        country: string;
        slug: string;
        flag: any
    }>>;
    data: any;
    setData: React.Dispatch<any>
}

const Covid19: React.FC<Props> = ({ }) => {
    const [country, setCountry] = useState<{ country: string, slug: string, flag: any }>({ country: "World", slug: 'world', flag: undefined })
    const [data, setData] = useState<any>()
    const [chartSize, setChartSize] = useState({ width: window.innerWidth - window.innerWidth / 3, height: 400 })
    const [worldData, setWorldData] = useState<any>()
    const [allData, setAllData] = useState([])
    const [currentCord, setCurrentCord] = useState({ lat: 50, long: 0 })
    const [countryData, setCountryData] = useState<{ data: any }>({ data: [] })

    const updateDimensions = () => {
        let update_width = window.innerWidth;
        setChartSize({ width: update_width - window.innerWidth / 3, height: 400 });

    }
    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get('https://disease.sh/v2/historical/all?lastdays=all')
            .then(res => {
                setWorldData(res.data)
            })
            .catch(err => console.log(err));
        updateDimensions();
        window.addEventListener("resize", () => { updateDimensions() });
        return () => {
            window.removeEventListener("resize", () => { updateDimensions() });
        }

    }, [])
    return (
        <div className="container-fluid pl-0 pr-0 grid">
            <div className="world-data-container">
                <Cases country={{ country: "World", slug: 'world', flag: undefined }} setData={setData} worldData={worldData} />
                <Chart country={{ country: "World", slug: 'world', flag: undefined }} data={data} chartSize={chartSize} />
                <div className="hidden-chart">
                    <Chart country={{ country: "World", slug: 'world', flag: undefined }} data={data} chartSize={chartSize} />
                </div>
            </div>
            <div className="cases-and-chart-container">
                <Cases country={country} setData={setData} worldData={worldData} />
                <Chart country={country} data={data} chartSize={chartSize} />
            </div>
            <CountryList country={country} setCountry={setCountry} setCurrentCord={setCurrentCord} countryData={countryData} setCountryData={setCountryData} />
            <Map chartSize={chartSize} allData={allData} currentCord={currentCord} country={country} setCountry={setCountry} />
            <CountryTable setAllData={setAllData} setCountry={setCountry} setCurrentCord={setCurrentCord} countryData={countryData} country={country} />
        </div>
    )
}

export default Covid19;
