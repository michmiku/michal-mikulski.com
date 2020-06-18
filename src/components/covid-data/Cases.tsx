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
    worldData: any,
}

const Cases: React.FC<Props> = ({ country, setData, worldData }) => {
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

        else if (country.slug !== "world") {
            axios.get('https://disease.sh/v2/countries/' + country.slug + '?yesterday=false')
                .then(res => {
                    let newActive: any = res.data.todayCases - res.data.todayDeaths - res.data.todayRecovered
                    if (newActive > 0) {
                        newActive = '+' + newActive
                    }
                    let data = {
                        total: + res.data.cases,
                        current: res.data.active,
                        deaths: res.data.deaths,
                        recovered: res.data.recovered,
                        newConfirmed: ' (+' + res.data.todayCases + ')',
                        newActive: ' (' + newActive + ')',
                        newDeaths: ' (+' + res.data.todayDeaths + ')',
                        newRecovered: ' (+' + res.data.todayRecovered + ')',
                    }
                    setTopData({ data })
                })
                .catch(err => console.log(err));
            axios.get('https://disease.sh/v2/historical/' + country.slug + '?lastdays=all')
                .then(res => {

                    setData(res.data.timeline)
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

