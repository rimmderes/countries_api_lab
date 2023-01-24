import CountriesList from "./CountriesList";

const Country = ({country}) => {

const handleChange = () => {
     
}
     
     return (
          <div>
          <ul>
               <li>
                    <input type="checkbox" name="Visited?" onChange={handleChange}/>
                    {country.name.common} {country.flag}
               </li>
               
                    Population: {country.population}
                 
            </ul>
            </div>
            
     )

}


export default Country;