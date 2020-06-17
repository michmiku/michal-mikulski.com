import React, { useState, useEffect, Fragment } from "react";
import { Table, Flag, Loader } from 'semantic-ui-react'
import axios from 'axios'
import '../../styles/css/covid19.css'
import _ from 'lodash'

interface Props {
    // country: {
    //     country: string;
    //     slug: string;
    // };
    // setData: React.Dispatch<any>,
    // usaData: any
}

const CountryTable: React.FC<Props> = ({ }) => {
    const [data, setData] = useState<any>([])
    const [sort, setSort] = useState<any>({
        column: null,
        data: data,
        direction: null,
    })
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then(res => {

                let data: any = []
                res.data.Countries.map((item: any) => {
                    data = [...data, {
                        flag: item.CountryCode.toLowerCase(),
                        country: item.Country,
                        totalCases: item.TotalConfirmed,
                        newCases: item.NewConfirmed,
                        totalDeaths: item.TotalDeaths,
                        newDeaths: item.NewDeaths,
                        totalRecovered: item.TotalRecovered,
                        newRecovered: item.NewRecovered,
                        activeCases: (item.TotalConfirmed - item.TotalDeaths - item.TotalRecovered)
                    }]
                })
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
                            <Table.Row key={key}>
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

