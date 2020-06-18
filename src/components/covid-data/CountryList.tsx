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
    }>>
}

const CountryList: React.FC<Props> = ({ country, setCountry }) => {
    const [countryData, setCountryData] = useState<{ data: any }>({ data: [] })
    const [search, setSearch] = useState<any>([])
    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then(res => {

                let data: any = []
                setCountryData({ data: [{ Country: 'World', Slug: 'world', Flag: undefined }, ...res.data.Countries] })
                res.data.Countries.map((item: any) => {
                    data = [...data, {
                        flag: item.CountryCode.toLowerCase(),
                        text: item.Country,
                        value: item.Slug
                    }]
                })
                setSearch([{ flag: undefined, text: "World", value: 'world' }, ...data])
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
        let temp = countryData.data.filter((item: any) => (
            item.Slug.toUpperCase() === value.toUpperCase()
        ))
        setCountry({ country: temp[0].Country, slug: temp[0].Slug, flag: temp[0].ISO2 })
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

