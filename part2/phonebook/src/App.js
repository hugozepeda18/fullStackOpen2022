import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '3339560082'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewPhone(event.target.value)
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

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
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
              return <li key={person.name}>{person.name} {person.number}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default App