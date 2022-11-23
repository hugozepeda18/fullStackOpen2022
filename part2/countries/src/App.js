import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  
  //USE STATES
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState([])

  //USE EFFECTS
  useEffect(() => {
    console.log('I am starting the call')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setAllCountries(response.data)
      })
      .catch(e => <h1>Please reload the page</h1>)
  }, [])

  //HANDLE FUNCTION
  const handleCountryChange = (event) => {
    setFilterCountries(event.target.value)
    const regex = new RegExp( filterCountries, 'i')
    const filteredCountries = () => allCountries.filter(country => country.name.common.match(regex))
    setCountries(filteredCountries)
  }

  return (
    <>
      <h1>Country search app</h1>
      <div>
        <h3>Find countries:</h3>
        <input 
          value={filterCountries}
          onChange={handleCountryChange}
          />
      </div>
      <div>
        <h2>Matched countries:</h2>
        { (countries.length === 0) ? <div></div> :
            (countries.length > 10) ? 
            <p>Too many matches, specify another filter</p>
            : (countries.length > 1) ? 
              <ul>
                {countries.map(country => <li>{country.name.common}</li>)}
              </ul> :
              <div>
                {countries.map(country => {
                  return(
                    <>
                      <h1>{country.name.common}</h1>
                      <p>capital:</p>
                      <p>{country.capital}</p>
                      <p>area:</p>
                      <p>{country.area}</p>
                      <p>Languages:</p>
                      <ul>
                        {Object.values(country.languages)}
                      </ul>
                      <img src={country.flags.png} alt="Country Flag"/>
                    </>
                  )
                })}
              </div>
        }
      </div>
    </>
  );
}

export default App;
