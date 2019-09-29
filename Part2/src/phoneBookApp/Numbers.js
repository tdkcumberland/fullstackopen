import React, {useEffect} from 'react'
import phoneService from './services/apiMethod'

const Numbers = ({person,number,id,refresh}) => {
    const deleteName = () =>{
        // window.confirm(`Delete ${person} ?`)
        const nameToDelete = {
            name : person,
            number : number,
            id : id,
        }
        console.log(nameToDelete)
        
        phoneService
        .deleteName(id,nameToDelete).then(response => {
            console.log(response)
            refresh({person})
        }
            
        )
    }

    return (
        <>
            <li>
                {person} : {number} (id = {id})
                <button type='button' onClick={deleteName}> delete</button>
            </li>
            
        </>
    )
}

export default Numbers