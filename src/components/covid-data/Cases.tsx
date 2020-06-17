import React, { useState, useEffect, Fragment } from "react";
import { Divider, Header, Icon, Table } from 'semantic-ui-react'
import axios from 'axios'
import '../../styles/css/covid19.css'

interface Props {
    country: {
        country: string;
        slug: string;
    };
    setData: React.Dispatch<any>,
    usaData: any
}

const Cases: React.FC<Props> = ({ country, setData, usaData }) => {
    const [topData, setTopData] = useState<{ data: any }>({ data: {} })
    useEffect(() => {
        if (country.country === "World") {
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
                    total: usaData[usaData.length - x].Confirmed + '(+' + newConfirmed + ')',
                    current: usaData[usaData.length - x].Active + '(+' + newActive + ')',
                    deaths: usaData[usaData.length - x].Deaths + '(+' + newDeaths + ')',
                    recovered: usaData[usaData.length - x].Recovered + '(+' + newRecovered + ')',
                }
                setTopData({ data })
                setData(usaData)
            }

        }
        else {
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
                            total: res.data[res.data.length - x].Confirmed + '(+' + newConfirmed + ')',
                            current: res.data[res.data.length - x].Active + '(+' + newActive + ')',
                            deaths: res.data[res.data.length - x].Deaths + '(+' + newDeaths + ')',
                            recovered: res.data[res.data.length - x].Recovered + '(+' + newRecovered + ')',
                        }
                        setTopData({ data })
                    }
                    setData(res.data)
                })
                .catch(err => console.log(err));
        }
    }, [country])

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
                        <Table.Cell>{topData.data.total}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell >TOTAL DEATHS</Table.Cell>
                        <Table.Cell>{topData.data.deaths}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell >TOTAL RECOVERED</Table.Cell>
                        <Table.Cell>{topData.data.recovered}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell >ACTIVE CASES</Table.Cell>
                        <Table.Cell>{topData.data.current}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </React.Fragment>

    )
}

export default Cases;

