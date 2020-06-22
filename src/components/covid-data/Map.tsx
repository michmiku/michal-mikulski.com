import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoibWljaG1pa3UiLCJhIjoiY2tia3dhNDd5MTMwNTJybHN3bmNldnB3bCJ9.6hBGoid3D2ooz7E3hYGYjQ';

interface Props {
    chartSize: any,
    allData: any,
    currentCord: any,
    country: {
        country: string;
        slug: string;
        flag: any;
    },
    setCountry: React.Dispatch<React.SetStateAction<{
        country: string;
        slug: string;
        flag: any;
    }>>
}
const Map: React.FC<Props> = ({ chartSize, allData, currentCord, country, setCountry }) => {
    const map: any = useRef(null)
    useEffect(() => {
        setViewport({
            latitude: currentCord.lat,
            longitude: currentCord.long,
            zoom: 3,
            bearing: 0,
            pitch: 0,
            width: map.current.offsetWidth,
            height: map.current.offsetHeight,
        })
    }, [chartSize, currentCord, map])

    const [viewport, setViewport] = useState({
        latitude: 50,
        longitude: 0,
        zoom: 2,
        bearing: 0,
        pitch: 0,
        width: 100,
        height: 100,
    })
    const [selectedCountry, setSelectedCountry] = useState<any>(null)
    const handleClick = (item: any) => {
        setSelectedCountry(item)
        setCountry({ country: item.country, slug: item.flag, flag: item.flag })
    }
    return (
        <div className="map" ref={map}>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={TOKEN}
                onViewportChange={(viewport) => setViewport(viewport)}
            >
                {allData.map((item: any) => (
                    <Marker
                        key={item.flag}
                        latitude={item.lat}
                        longitude={item.long}
                    >{country.country !== item.country ? <div style={{ width: '15px', height: '15px', backgroundColor: 'grey', borderRadius: '50%', cursor: 'pointer' }} onClick={() => { handleClick(item) }}></div>
                        :
                        <div style={{ width: '15px', height: '15px', backgroundColor: 'red', borderRadius: '50%', cursor: 'pointer' }} onClick={() => { handleClick(item) }}></div>}

                    </Marker>
                ))}
                {selectedCountry ? (
                    <Popup latitude={selectedCountry.lat} longitude={selectedCountry.long} onClose={() => {
                        setSelectedCountry(null)
                    }}>
                        <div>
                            <h5><b>{selectedCountry.country}</b></h5>
                            <p><b>Total cases:</b> {selectedCountry.totalCases} (+{selectedCountry.newCases})</p>
                            <p><b>Total deaths:</b> {selectedCountry.totalDeaths} (+{selectedCountry.newDeaths})</p>
                            <p><b>Total recovered:</b> {selectedCountry.totalRecovered} (+{selectedCountry.newRecovered})</p>
                            <p><b>Active cases:</b> {selectedCountry.activeCases} (+{selectedCountry.newCases - selectedCountry.newDeaths - selectedCountry.newRecovered})</p>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    )
}

export default Map;

