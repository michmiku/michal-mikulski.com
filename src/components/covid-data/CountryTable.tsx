import React, { useState, useEffect, Fragment } from "react";
import { Table, Flag, Loader } from 'semantic-ui-react'
import axios from 'axios'
import '../../styles/css/covid19.css'
import _ from 'lodash'

interface Props {
    setAllData: React.Dispatch<React.SetStateAction<never[]>>,
    setCountry: React.Dispatch<React.SetStateAction<{
        country: string;
        slug: string;
        flag: any;
    }>>,
    setCurrentCord: React.Dispatch<React.SetStateAction<{
        lat: number;
        long: number;
    }>>,
    countryData: {
        data: any;
    },
    country: {
        country: string;
        slug: string;
        flag: any;
    }
}

const CountryTable: React.FC<Props> = ({ setAllData, countryData, setCountry, setCurrentCord, country }) => {
    const [data, setData] = useState<any>([])
    const [sort, setSort] = useState<any>({
        column: null,
        data: data,
        direction: null,
    })
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios.get('https://disease.sh/v2/countries')
            .then(res => {
                let data: any = []
                res.data.map((item: any) => {
                    if (item.countryInfo.iso2 !== null) {
                        data = [...data, {
                            flag: item.countryInfo.iso2.toLowerCase(),
                            country: item.country,
                            totalCases: item.cases,
                            newCases: item.todayCases,
                            totalDeaths: item.deaths,
                            newDeaths: item.todayDeaths,
                            totalRecovered: item.recovered,
                            newRecovered: item.todayRecovered,
                            activeCases: (item.cases - item.deaths - item.recovered),
                            lat: item.countryInfo.lat,
                            long: item.countryInfo.long
                        }]
                    }
                })
                setAllData(data)
                setData(data)
                setSort({
                    column: null,
                    data: data,
                    direction: null,
                })
                setIsLoading(false)
            })
            .catch(err => console.log(err));
    }, [])
    const handleSort = (clickedColumn: string) => () => {
        const { column, data, direction } = sort
        if (column !== clickedColumn) {
            setSort({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            })
            return
        }
        else {
            setSort({
                column: clickedColumn,
                data: data.reverse(),
                direction: direction === 'ascending' ? 'descending' : 'ascending',
            })
        }
    }
    const handleChange = (value: any) => {
        let temp = countryData.data.filter((item: any) => {
            if (item.countryInfo !== undefined) {
                return item.countryInfo.iso2 === value.toUpperCase()
            }
        })
        setCountry({ country: temp[0].country, slug: temp[0].countryInfo.iso3, flag: temp[0].countryInfo.iso2 })
        setCurrentCord({ lat: temp[0].countryInfo.lat, long: temp[0].countryInfo.long })
    }
    return (
        <div style={{ width: '100%', height: '100%', overflow: 'auto ' }}>
            <Table sortable celled fixed>
                <Table.Header >
                    <Table.Row >
                        <Table.HeaderCell style={{ position: 'sticky', top: '0' }}
                            sorted={sort.column === 'country' ? sort.direction : null}
                            onClick={handleSort('country')}>
                            Country
                        </Table.HeaderCell>
                        <Table.HeaderCell style={{ position: 'sticky', top: '0' }}
                            sorted={sort.column === 'totalCases' ? sort.direction : null}
                            onClick={handleSort('totalCases')}>
                            Total cases
                        </Table.HeaderCell>
                        <Table.HeaderCell style={{ position: 'sticky', top: '0' }}
                            sorted={sort.column === 'newCases' ? sort.direction : null}
                            onClick={handleSort('newCases')}>
                            New cases
                        </Table.HeaderCell>
                        <Table.HeaderCell style={{ position: 'sticky', top: '0' }}
                            sorted={sort.column === 'totalDeaths' ? sort.direction : null}
                            onClick={handleSort('totalDeaths')}>
                            Total deaths
                        </Table.HeaderCell>
                        <Table.HeaderCell style={{ position: 'sticky', top: '0' }}
                            sorted={sort.column === 'newDeaths' ? sort.direction : null}
                            onClick={handleSort('newDeaths')}>
                            New deaths
                        </Table.HeaderCell>
                        <Table.HeaderCell style={{ position: 'sticky', top: '0' }}
                            sorted={sort.column === 'totalRecovered' ? sort.direction : null}
                            onClick={handleSort('totalRecovered')}>
                            Total recovered
                        </Table.HeaderCell>
                        <Table.HeaderCell style={{ position: 'sticky', top: '0' }}
                            sorted={sort.column === 'newRecovered' ? sort.direction : null}
                            onClick={handleSort('newRecovered')}>
                            New recovered
                        </Table.HeaderCell>
                        <Table.HeaderCell style={{ position: 'sticky', top: '0' }}
                            sorted={sort.column === 'activeCases' ? sort.direction : null}
                            onClick={handleSort('activeCases')}>
                            Active cases
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {isLoading ?
                    <Loader active inline='centered' content='Loading' style={{ margin: '20px', left: '40vw' }} /> :
                    <Table.Body>
                        {sort.data.map((item: any, key: number) => (
                            country.country === item.country ? <Table.Row key={key} onClick={() => { handleChange(item.flag) }} style={{ cursor: 'pointer' }} className='country-row-selected'>
                                <Table.Cell><Flag name={item.flag} />{item.country}</Table.Cell>
                                <Table.Cell>{item.totalCases}</Table.Cell>
                                <Table.Cell>{item.newCases}</Table.Cell>
                                <Table.Cell>{item.totalDeaths}</Table.Cell>
                                <Table.Cell>{item.newDeaths}</Table.Cell>
                                <Table.Cell>{item.totalRecovered}</Table.Cell>
                                <Table.Cell>{item.newRecovered}</Table.Cell>
                                <Table.Cell>{item.activeCases}</Table.Cell>
                            </Table.Row> :
                                <Table.Row key={key} onClick={() => { handleChange(item.flag) }} style={{ cursor: 'pointer' }} className='country-row'>
                                    <Table.Cell><Flag name={item.flag} />{item.country}</Table.Cell>
                                    <Table.Cell>{item.totalCases}</Table.Cell>
                                    <Table.Cell>{item.newCases}</Table.Cell>
                                    <Table.Cell>{item.totalDeaths}</Table.Cell>
                                    <Table.Cell>{item.newDeaths}</Table.Cell>
                                    <Table.Cell>{item.totalRecovered}</Table.Cell>
                                    <Table.Cell>{item.newRecovered}</Table.Cell>
                                    <Table.Cell>{item.activeCases}</Table.Cell>
                                </Table.Row>
                        ))}

                    </Table.Body>
                }
            </Table>
        </div>
    )
}

export default CountryTable;

