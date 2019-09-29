import React from 'react'

const Person = (props) => {
    return (
        <>
            <h2 className='person'>Numbers</h2>
            <ul>
                {props.row}
            </ul>
        </>
    )
}

export default Person