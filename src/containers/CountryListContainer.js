import { useEffect, useState} from "react";
import CountriesList from '../components/CountriesList';

const CountryListContainer = () => {

    const [countries, setCountries] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
        
    }, []);

    return (
                countries ?  <CountriesList countries={countries} /> : <p>Loading countries..</p> 
        )
        
}

export default CountryListContainer;