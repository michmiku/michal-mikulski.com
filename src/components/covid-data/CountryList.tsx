import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../styles/css/covid19.css'

interface Props {
    country:{
        country: string;
        slug: string;
    };
    setCountry:React.Dispatch<React.SetStateAction<{
        country: string;
        slug: string;
    }>>
}

const CountryList: React.FC<Props> = ({country,setCountry }) => {
    const [countryData, setCountryData] = useState<{ data: any }>({ data: [] })
    useEffect(() => {
        axios.get('https://api.covid19api.com/countries')
            .then(res => {
                let data = res.data
                data= data.sort(compare)
                setCountryData({ data })
            })
            .catch(err => console.log(err));
    }, [])

    const compare=(a:any, b:any)=> {
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
      

    return (
        <div className="country-container">
                {countryData.data.map((item: any, key: number) => (
                    <div className="country" key={key} onClick={()=>{setCountry({country:item.Country,slug:item.Slug})}}>{item.Country}</div>
                ))
                }
        </div>
    )
}

export default CountryList;

