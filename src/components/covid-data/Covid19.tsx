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
    const [chartSize, setChartSize] = useState({ width: 700, height: 400 })
    const [worldData, setWorldData] = useState<any>()
    const [allData, setAllData] = useState([])
    const [currentCord, setCurrentCord] = useState({ lat: 50, long: 0 })
    const updateDimensions = () => {
        let update_width = window.innerWidth / 2.8;
        setChartSize({ width: update_width, height: 660 / 2.4 });
        if (window.innerHeight >= 660) {

            let update_height = window.innerHeight / 2.4;

            setChartSize({ width: update_width, height: update_height });
        }
    }
    useEffect(() => {

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
        <div className="main-container">
            <div className="row first-row">
                <div className="col">
                    <div className="row ">
                        <div className="col data-columns">
                            <Cases country={{ country: "World", slug: 'world', flag: undefined }} setData={setData} worldData={worldData} />
                        </div>


                    </div>
                    <div className="row ">

                        <div className="col data-columns">
                            <Cases country={country} setData={setData} worldData={worldData} />
                        </div>

                    </div>
                    <div className="row ">
                        <div className="col countryList">
                            <CountryList country={country} setCountry={setCountry} setCurrentCord={setCurrentCord} />

                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="map-container">
                        <Map chartSize={chartSize} allData={allData} currentCord={currentCord} />
                    </div>
                </div>
                <div className="col chart-col">
                    <div className="chart-container">
                        <Chart country={country} data={data} chartSize={chartSize} /></div>
                </div>
            </div>
            <div className="row second-row">
                <div className="col countryTable">
                    <CountryTable setAllData={setAllData} />
                </div>
            </div>
        </div>
    )
}

export default Covid19;
