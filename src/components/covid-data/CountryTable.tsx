import React, { useState, useEffect, Fragment } from "react";
import { Divider, Header, Icon, Table, Label, Menu, Flag } from 'semantic-ui-react'
import axios from 'axios'
import '../../styles/css/covid19.css'

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
    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then(res => {

                let data: any = []
                res.data.Countries.map((item: any) => {
                    data = [...data, {
                        flag: item.CountryCode.toLowerCase(),
                        country: item.Country,
                        totalCases: item.TotalConfirmed + '(+' + item.NewConfirmed + ')',
                        totalDeaths: item.TotalDeaths + '(+' + item.NewDeaths + ')',
                        totalRecovered: item.TotalRecovered + '(+' + item.NewRecovered + ')',
                        activeCases: (item.TotalConfirmed - item.TotalDeaths - item.TotalRecovered) + '(+' + (item.NewConfirmed - item.NewDeaths - item.NewRecovered) + ')'
                    }]
                })
                setData(data)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div style={{ width: '100%', height: '60%', overflow: 'auto ' }}>
            <Table celled stackable={true} layout>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Country</Table.HeaderCell>
                        <Table.HeaderCell>Total cases</Table.HeaderCell>
                        <Table.HeaderCell>Total deaths</Table.HeaderCell>
                        <Table.HeaderCell>Total recovered</Table.HeaderCell>
                        <Table.HeaderCell>Active cases</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {data.map((item: any, key: number) => (
                        <Table.Row key={key}>
                            <Table.Cell><Flag name={item.flag} />{item.country}</Table.Cell>
                            <Table.Cell>{item.totalCases}</Table.Cell>
                            <Table.Cell>{item.totalDeaths}</Table.Cell>
                            <Table.Cell>{item.totalRecovered}</Table.Cell>
                            <Table.Cell>{item.activeCases}</Table.Cell>
                        </Table.Row>
                    ))}

                </Table.Body>
            </Table>
        </div>
    )
}

export default CountryTable;

