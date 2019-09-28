import React from 'react'

const Filter = (props) => {
    return(
        <>
            <h2>Phone book</h2>
            <form>
                <div>
                    <input value={props.nameToSearch} onChange={props.handleNameSearchChange} onClick={props.test}/>
                </div>
            </form>
        </>
    )
}

export default Filter