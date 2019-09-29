import React from 'react'
import { useState , useEffect } from 'react'
import Numbers from './Numbers'
import Person from './Person'
import PersonForm from './PersonForm'
import Filter from './Filter'
import phoneService from './services/apiMethod'

const AppPhoneBook = () => {

    const [persons, setPersons] = useState([])
    const uuidv4 = require('uuid/v4');
    const [newName, setNewName] = useState('enter a name...')
    const [newNumber, setNewNumber] = useState('enter a number...')
    const [nameToSearch, setNameToSearch] = useState('')
    const nameToShow = persons.filter(person => person.name.toLowerCase().includes(nameToSearch.toLowerCase()))

    useEffect(()=>{
        phoneService
        .getAll()
        .then(response => {
            console.log(response.data)
            setPersons(response.data)
        })
    }, [])

    const refresh = ({person}) => {
        console.log(persons)
        const newNameSetAfterDelete = persons.filter(eachPerson => !eachPerson.name.includes(person))
        setPersons(newNameSetAfterDelete)
    }

    const row = () => nameToShow.map(person => 
        <Numbers
            key = {uuidv4()}
            person = {person.name}
            number = {person.number}
            id = {person.id}
            refresh  = {refresh}
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
        // console.log(persons.filter(person => person.name.includes(event.target.value)))
    }

    const addName = (event) => {
        event.preventDefault()
        console.log(persons.filter(person => console.log(person.name, newName))>0)

        if (persons.filter(person => person.name === newName).length>0) {
            window.confirm(`${newName} is already in the phonebook !!! Do you want to update the phone number for this person?`)
            const idToUpdate = persons.filter(person => person.name.includes(newName))
            console.log(idToUpdate[0].id)
            const updateObject = {
                id: idToUpdate[0].id,
                name: newName,
                number: newNumber
            }
            console.log(newName,newNumber)
            phoneService
            .update(idToUpdate[0].id,updateObject)
            .then(response =>{
                const a =   persons.map(el => el.id === idToUpdate[0].id ? {...el,number : newNumber} : el)
                console.log(a)
                setPersons(a)
            }
                )
        } else if (!newName || !newNumber) {
            window.alert('please provide both name and number')
        } else {
            const newNameObject = {
                name : newName,
                number : newNumber,
                id : uuidv4(),
            }

            phoneService
            .create(newNameObject)
            .then(response => {
                setPersons(persons.concat(newNameObject))
                setNewName('')
            })
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