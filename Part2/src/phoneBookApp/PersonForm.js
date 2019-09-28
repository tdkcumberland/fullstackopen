import React from 'react'

const PersonForm = (props) => {
    return (
        <>
        <h2>add a new</h2>
        <form onSubmit={props.addName}>
            <div>
                name: <input value={props.newName} onChange={props.handleNameChange} onClick={props.clearNameInput} />
            </div>
            <div>
                number : <input value={props.newNumber} onChange={props.handleNumberChange} onClick={props.clearNumberInput} />
            </div>

            <button type='submit'>add</button>
        </form>
        </>
    )
}

export default PersonForm