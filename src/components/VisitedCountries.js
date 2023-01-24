import CountriesList from "./CountriesList";
import Country from "./Country";
const VisitedCountries = () => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const addVisitedCountries = (country) => {

        setVisitedCountries = ([...visitedCountries, country])
    }

    return (
    
            visitedCountries ? visitedCountries.map(function(country) 
            
            )
        )

    
} 