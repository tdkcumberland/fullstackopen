import React from 'react';
import Part from './Part';

const Content = ({contents,id}) => {
    console.log("ContentsID", id)
    const getSumofArray = (accumulator, currentValue) => accumulator + currentValue
    const exeList = contents.map(content => content.exercises).reduce(getSumofArray)
    const partList = () => contents.map(part =>
        <Part
            name={part.name}
            id={part.id} 
            exercises={part.exercises}
            key={part.id}
        />
    )

    return (
        <>
            <ul>
                {partList()}
            </ul>
            <b>total exercises: {exeList}</b>
        </>
    )
}

export default Content;