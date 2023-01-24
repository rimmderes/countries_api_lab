import Country from './Country'

const CountriesList = ({countries}) => {
    let mappedCountries = countries.map((country, id) => {
        return <Country country={country}/> //This is how we pass down the data, in this case is 'country' (props)
    })
    return (
        <ul>
            {mappedCountries}
        </ul>
    )
}

export default CountriesList;