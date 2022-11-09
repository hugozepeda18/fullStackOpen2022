import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  
  //USE STATES
  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('')
  const [filterCountries, setFilterCountries] = useState([])

  //USE EFFECTS
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  //HANDLE FUNCTION
  const handleCountryChange = (event) => {
    setNewCountry(event.target.value)
    
  }

  return (
    <>
      <h1>Country search app</h1>
      <div>
        <h3>Find countries:</h3>
        <input 
          value={newCountry}
          onChange={handleCountryChange}
          />
      </div>
      <div>
        <h2>Matched countries:</h2>
      </div>
    </>
  );
}

export default App;
