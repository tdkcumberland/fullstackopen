import React from 'react'
import { useState } from 'react'
import Numbers from './Numbers'
import Person from './Person'
import PersonForm from './PersonForm'
import Filter from './Filter'

const AppPhoneBook = ({person}) => {
    const [persons, setPersons] = useState(
        [ 
            {name: 'Timothy Cumberland', number: 227475086},
            {name : 'Sherlock Holmes', number: 221236575},
            { name: 'Arto Hellas', number: 125335466 },
            { name: 'Ada Lovelace', number: 39445323523 },
            { name: 'Dan Abramov', number: 1243234345 },
            { name: 'Mary Poppendieck', number: 39236423122 }
        ])

    const uuidv4 = require('uuid/v4');
    const [newName, setNewName] = useState('enter a name...')
    const [newNumber, setNewNumber] = useState('enter a number...')
    const [nameToSearch, setNameToSearch] = useState('')
    const nameToShow = persons.filter(person => person.name.toLowerCase().includes(nameToSearch.toLowerCase()))

    const row = () => nameToShow.map(person => 
        <Numbers
            key = {uuidv4()}
            person = {person.name}
            number = {person.number}
        />
    )

    const test = (event) => {
        console.log(persons.filter(person => person.name.includes(event.target.value)))
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
        // console.log(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
        // console.log(event.target.value)
    }

    const handleNameSearchChange = (event) => {
        setNameToSearch(event.target.value)
        console.log(persons.filter(person => person.name.includes(event.target.value)))
    }

    const addName = (event) => {
        event.preventDefault()
        console.log(persons.filter(person => console.log(person.name, newName))>0)

        if (persons.filter(person => person.name === newName).length>0) {
            window.alert(`${newName} is already in the phonebook !!!`)
        } else if (!newName || !newNumber) {
            window.alert('please provide both name and number')
        } else {
            const newNameObject = {
                name : newName,
                number : newNumber,
            }
            setPersons(persons.concat(newNameObject))
            setNewName('')
        }

    }

    const clearNameInput = (event) => {
        event.preventDefault()
        setNewName('')
    }

    const clearNumberInput = (event) =>{
        event.preventDefault()
        setNewNumber('')
    }

    return (
        <div>
            <Filter nameToSearch={nameToSearch} handleNameSearchChange={handleNameSearchChange} test={test}/>
            <PersonForm newName={newName} handleNameChange={handleNameChange} clearNameInput={clearNameInput} 
            newNumber={newNumber} handleNumberChange={handleNumberChange} clearNumberInput={clearNumberInput} addName={addName}/>
            <Person row={row()} />
        </div>
    )
}

export default AppPhoneBook