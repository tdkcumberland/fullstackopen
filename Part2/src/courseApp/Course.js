import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({name,partsList,id}) => {
    console.log("CourseID", id)

    return (
        <>
            <div>
                <Header header={name} id={id}/>
                <Content contents={partsList} id={id}/>
            </div>
        </>
    )
}

export default Course;