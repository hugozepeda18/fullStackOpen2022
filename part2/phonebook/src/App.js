import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const newPerson = {
      name: newName
    }
    if(persons.find(element => element.name === newPerson.name)){
      alert(`${newPerson.name} already in the list`)
      setNewName('')
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
    } 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <form onSubmit={addPerson}>
          <input
            value={newName}
            onChange={handleNameChange}
          />
          <button type="submit">add</button>
        </form>  
      </div>
      <h2>Numbers</h2>
      ...
      <div>
        <h2>Names:</h2>
        <ul>
          {persons.map(person => {
              return <li key={person.name}>{person.name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default App