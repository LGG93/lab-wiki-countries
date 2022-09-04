import React from 'react'
import { useParams } from 'react-router-dom';

function CountryDetails({countries}) {
    
    const { countryId } = useParams();
    const country = countries.find((e) => e.alpha3Code.toLowerCase() === countryId);
    console.log("what dooo we have here", country);

    return (
        <div className='country-details'>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag'/>
            <h1>{country.name.official}</h1>
            <p>Capital: {country.capital}</p>
        </div>  
    )
}

export default CountryDetails;