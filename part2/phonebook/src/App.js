import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '3339560082',
      id: 1
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewPhone(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const newPerson = {
      name: newName,
      number: newPhone
    }
    if(persons.find(element => element.name === newPerson.name)){
      alert(`${newPerson.name} already in the list`)
      setNewName('')
      setNewPhone('')
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewPhone('')
    } 
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  return (
    <>
      <h2>Phonebook</h2>
      <div>
        <h3>Filter a person:</h3>
        <input 
          value={newFilter}
          onChange={handleFilterChange}
          />
      </div>
      <div>
        <h3>Add a new person:</h3>
        <form onSubmit={addPerson}>
          <div>
            Name: 
            <input
              value={newName}
              onChange={handleNameChange}
              />
          </div>
          <div>
            Number: 
            <input
              value={newPhone}
              onChange={handleNumberChange}
              />
          </div>
          <button type="submit">Add</button>
        </form>  
      </div>
      <div>
        <h2>Numbers:</h2>
        <ul>
          {persons.map(person => {
            if(newFilter.length === 0){
              return( 
                <li key={person.name}>{person.name} {person.number}</li>)
            } else {
              if(person.name[0] == newFilter[0]){
                return( 
                  <li key={person.name}>{person.name} {person.number}</li>)
              }
            }
          })}
        </ul>
      </div>
    </>
  )
}

export default App