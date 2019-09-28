import React from 'react'

const Numbers = ({person, number}) => {
    return (
        <>
            <li>
                {person} : {number}
            </li>
        </>
    )
}

export default Numbers