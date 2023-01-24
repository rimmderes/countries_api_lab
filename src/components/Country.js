import CountriesList from "./CountriesList";

const Country = ({country}) => {

     return (
          <div>
          <ul>
               <li>
                    Name: {country.name.common} {country.flag}
               </li>
               
                    Population: {country.population}
                 
            </ul>
            </div>
     )

}



export default Country;