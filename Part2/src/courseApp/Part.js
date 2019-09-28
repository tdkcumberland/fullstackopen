import React from 'react';

const Part = ({name, id, exercises}) => {
    console.log("PartID", id)

    return (
        <>
            <li>
                {name}: {exercises}
            </li>
        </>
    )
}

export default Part;