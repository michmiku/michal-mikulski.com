import React, { useState, useEffect } from "react";
import axios from 'axios'
import '../../styles/css/covid19.css'
import { Dropdown } from 'semantic-ui-react'
import { Divider, Header, Icon, Table } from 'semantic-ui-react'

interface Props {
    country: {
        country: string;
        slug: string;
        flag: string
    };
    setCountry: React.Dispatch<React.SetStateAction<{
        country: string;
        slug: string;
        flag: string
    }>>,
    setCurrentCord: React.Dispatch<React.SetStateAction<{
        lat: number;
        long: number;
    }>>,
    countryData: {
        data: any;
    },
    setCountryData: React.Dispatch<React.SetStateAction<{
        data: any;
    }>>
}

const CountryList: React.FC<Props> = ({ country, setCountry, setCurrentCord, countryData, setCountryData }) => {
    const [search, setSearch] = useState<any>([])
    useEffect(() => {
        axios.get('https://disease.sh/v2/countries')
            .then(res => {
                let data: any = []
                setCountryData({ data: res.data })
                res.data.map((item: any) => {
                    if (item.countryInfo.iso2 !== null) {
                        data = [...data, {
                            flag: item.countryInfo.iso2.toLowerCase(),
                            text: item.country,
                            value: item.countryInfo.iso3,
                        }]
                    }
                })
                setSearch(data)
            })
            .catch(err => console.log(err));
    }, [])

    const compare = (a: any, b: any) => {
        const bandA = a.Country.toUpperCase();
        const bandB = b.Country.toUpperCase();
        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }

    const handleChange = (event: React.SyntheticEvent<HTMLElement>, { value }: any) => {
        let temp = countryData.data.filter((item: any) => {
            if (item.countryInfo !== undefined) {
                return item.countryInfo.iso3 === value
            }
        })
        setCountry({ country: temp[0].country, slug: temp[0].countryInfo.iso3, flag: temp[0].countryInfo.iso2 })
        setCurrentCord({ lat: temp[0].countryInfo.lat, long: temp[0].countryInfo.long })
    }
    return (
        <div className="country-container">
            <Divider horizontal>
                <Header as='h3' className='select-header'>
                    Select Country
                </Header>
            </Divider>
            <Dropdown
                fluid
                search
                selection
                options={search}
                value={country.country}
                onChange={handleChange}
            />
        </div>
    )
}

export default CountryList;

