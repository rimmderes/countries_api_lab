import CountriesList from "./CountriesList";

const Country = ({countries}) => {

     return (
        <li>
            {countries.name.common}
            </li>
        

     )

}



export default Country;