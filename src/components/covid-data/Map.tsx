import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import axios from 'axios'
import { Item } from "semantic-ui-react";

const TOKEN = 'pk.eyJ1IjoibWljaG1pa3UiLCJhIjoiY2tia3dhNDd5MTMwNTJybHN3bmNldnB3bCJ9.6hBGoid3D2ooz7E3hYGYjQ';

interface Props {
    chartSize: any,
    allData: any,
    currentCord: any
}
const Map: React.FC<Props> = ({ chartSize, allData, currentCord }) => {
    useEffect(() => {
        setViewport({
            latitude: currentCord.lat,
            longitude: currentCord.long,
            zoom: 2,
            bearing: 0,
            pitch: 0,
            width: chartSize.width,
            height: chartSize.height + 50,
        })
    }, [chartSize, currentCord])

    const [viewport, setViewport] = useState({
        latitude: 50,
        longitude: 0,
        zoom: 2,
        bearing: 0,
        pitch: 0,
        width: chartSize.width,
        height: chartSize.height + 50,
    })
    const [selectedCountry, setSelectedCountry] = useState<any>(null)
    return (
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
                >
                    <div style={{ width: '15px', height: '15px', backgroundColor: 'grey', borderRadius: '50%', cursor: 'pointer' }} onClick={() => {
                        setSelectedCountry(item)
                    }}></div>
                </Marker>
            ))}
            {selectedCountry ? (
                <Popup latitude={selectedCountry.lat} longitude={selectedCountry.long} onClose={() => {
                    setSelectedCountry(null)
                }}>
                    <div>
                        <h5><b>{selectedCountry.country}</b></h5>
                        <p><b>Total cases:</b> {selectedCountry.totalCases} (+{selectedCountry.newCases})</p>
                        <p><b>Total deaths:</b> {selectedCountry.totalDeaths}(+{selectedCountry.newDeaths})</p>
                        <p><b>Total recovered:</b> {selectedCountry.totalRecovered}(+{selectedCountry.newRecovered})</p>
                        <p><b>Active cases:</b> {selectedCountry.activeCases}(+{selectedCountry.newCases - selectedCountry.newDeaths - selectedCountry.newRecovered})</p>
                    </div>
                </Popup>
            ) : null}
        </ReactMapGL>
    )
}

export default Map;

