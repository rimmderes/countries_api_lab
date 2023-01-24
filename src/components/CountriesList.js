import Country from './Country'

const CountriesList = ({countries}) => {
    let mappedCountries = countries.map((country, id) => {
        return <Country />
    })
    return (
        <ul>
            {mappedCountries}
        </ul>
    )
}

export default CountriesList;