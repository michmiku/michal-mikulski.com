import React, { useState, useEffect, Fragment } from "react";
import { Divider, Header, Icon, Table } from 'semantic-ui-react'
import axios from 'axios'
import '../../styles/css/covid19.css'

interface Props {
    country: {
        country: string,
        slug: string,
        flag: any
    };
    setData: React.Dispatch<any>,
    usaData: any,
    worldData: any,
}

const Cases: React.FC<Props> = ({ country, setData, usaData, worldData }) => {
    const [topData, setTopData] = useState<{ data: any }>({ data: {} })
    useEffect(() => {
        if (country.country === "World" && worldData !== undefined) {
            let cases = Object.keys(worldData.cases)
            let deaths = Object.keys(worldData.deaths)
            let recovered = Object.keys(worldData.recovered)
            let current = worldData.cases[cases[cases.length - 1]] - worldData.deaths[deaths[deaths.length - 1]] - worldData.recovered[recovered[recovered.length - 1]]
            let yesterdayCurrent = worldData.cases[cases[cases.length - 2]] - worldData.deaths[deaths[deaths.length - 2]] - worldData.recovered[recovered[recovered.length - 2]]
            let data = {
                total: worldData.cases[cases[cases.length - 1]],
                current: current,
                deaths: worldData.deaths[deaths[deaths.length - 1]],
                recovered: worldData.recovered[recovered[recovered.length - 1]],
                newConfirmed: ' (+' + (worldData.cases[cases[cases.length - 1]] - worldData.cases[cases[cases.length - 2]]) + ')',
                newActive: ' (+' + (current - yesterdayCurrent) + ')',
                newDeaths: ' (+' + (worldData.deaths[deaths[deaths.length - 1]] - worldData.deaths[deaths[deaths.length - 2]]) + ')',
                newRecovered: ' (+' + (worldData.recovered[recovered[recovered.length - 1]] - worldData.recovered[recovered[recovered.length - 2]]) + ')',
            }
            setTopData({ data })
            setData(worldData)
        }
        else if (country.slug === 'united-states') {
            if (usaData.length > 1) {
                var x = 1
                while (usaData[usaData.length - x].Province !== "") {
                    x++
                }
                var y = x + 1
                while (usaData[usaData.length - y].Province !== "") {
                    y++
                }
                let newConfirmed = usaData[usaData.length - x].Confirmed - usaData[usaData.length - y].Confirmed
                let newActive = usaData[usaData.length - x].Active - usaData[usaData.length - y].Active
                let newDeaths = usaData[usaData.length - x].Deaths - usaData[usaData.length - y].Deaths
                let newRecovered = usaData[usaData.length - x].Recovered - usaData[usaData.length - y].Recovered
                let data = {
                    total: + usaData[usaData.length - x].Confirmed,
                    current: usaData[usaData.length - x].Active,
                    deaths: usaData[usaData.length - x].Deaths,
                    recovered: usaData[usaData.length - x].Recovered,
                    newConfirmed: ' (+' + newConfirmed + ')',
                    newActive: ' (+' + newActive + ')',
                    newDeaths: ' (+' + newDeaths + ')',
                    newRecovered: ' (+' + newRecovered + ')',
                }
                setTopData({ data })
                setData(usaData)
            }

        }
        else if (country.slug !== "world") {
            axios.get('https://api.covid19api.com/country/' + country.slug)
                .then(res => {
                    if (res.data[0] === undefined) {
                        let data = {
                            total: 'No data',
                            current: 'No data',
                            deaths: 'No data',
                            recovered: 'No data'
                        }
                        setTopData({ data })
                    }
                    else {
                        var x = 1

                        while (res.data[res.data.length - x].Province !== "") {
                            x++
                        }
                        var y = x + 1
                        while (res.data[res.data.length - y].Province !== "") {
                            y++
                        }
                        let newConfirmed = res.data[res.data.length - x].Confirmed - res.data[res.data.length - y].Confirmed
                        let newActive = res.data[res.data.length - x].Active - res.data[res.data.length - y].Active
                        let newDeaths = res.data[res.data.length - x].Deaths - res.data[res.data.length - y].Deaths
                        let newRecovered = res.data[res.data.length - x].Recovered - res.data[res.data.length - y].Recovered
                        let data = {
                            total: + res.data[res.data.length - x].Confirmed,
                            current: res.data[res.data.length - x].Active,
                            deaths: res.data[res.data.length - x].Deaths,
                            recovered: res.data[res.data.length - x].Recovered,
                            newConfirmed: ' (+' + newConfirmed + ')',
                            newActive: ' (+' + newActive + ')',
                            newDeaths: ' (+' + newDeaths + ')',
                            newRecovered: ' (+' + newRecovered + ')',
                        }
                        setTopData({ data })
                    }
                    setData(res.data)
                })
                .catch(err => console.log(err));
        }
    }, [country, worldData])

    return (
        <React.Fragment >
            <Divider horizontal>
                <Header as='h3' className='cases-header'>
                    {country.country}
                </Header>
            </Divider>

            <Table definition >
                <Table.Body >
                    <Table.Row >
                        <Table.Cell >TOTAL CASES</Table.Cell>
                        <Table.Cell><b>{topData.data.total}</b>{topData.data.newConfirmed}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell >TOTAL DEATHS</Table.Cell>
                        <Table.Cell><b>{topData.data.deaths}</b>{topData.data.newDeaths}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell >TOTAL RECOVERED</Table.Cell>
                        <Table.Cell><b>{topData.data.recovered}</b>{topData.data.newRecovered}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell >ACTIVE CASES</Table.Cell>
                        <Table.Cell><b>{topData.data.current}</b>{topData.data.newActive}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </React.Fragment>

    )
}

export default Cases;

