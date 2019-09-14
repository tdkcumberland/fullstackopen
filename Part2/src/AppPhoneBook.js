import React from 'react'
import { useState } from 'react'
import Numbers from './Numbers'

const AppPhoneBook = ({person}) => {
    const [persons, setPersons] = useState(
        [ 
            {name: 'Timothy Cumberland', number: 227475086},
            {name : 'Sherlock Holmes', number: 221236575},
        ])

    const uuidv4 = require('uuid/v4');
    const [newName, setNewName] = useState('enter a name...')
    const [newNumber, setNewNumber] = useState('enter a number...')

    const row = () => persons.map(person => 
        <Numbers
            key = {uuidv4()}
            person = {person.name}
            number = {person.number}
        />
    )

    const handleNameChange = (event) => {
        setNewName(event.target.value)
        // console.log(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
        // console.log(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
        console.log(persons.filter(person => console.log(person.name, newName))>0)

        if (persons.filter(person => person.name === newName).length>0) {
            window.alert(`${newName} is already in the phonebook !!!`)
        } else if (!newName) {
            window.alert('can\'t add empty string')
        } else {
            const newNameObject = {
                name : newName,
            }
            setPersons(persons.concat(newNameObject))
            setNewName('')
        }

    }

    const clearInput = (event) => {
        event.preventDefault()
        setNewName('')
    }

    return (
        <div>
            <h2>Phone book</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} onClick={clearInput} />
                </div>
                <div>
                    number : <input value={newNumber} onChange={handleNumberChange} onClick={clearInput} />
                </div>

                <button type='submit'>add</button>
            </form>
        <h2>Numbers</h2>
            <ul>
                {row()}
            </ul>
        </div>
    )
}

export default AppPhoneBook