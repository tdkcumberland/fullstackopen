import React from 'react';
import Course from './Course';

const Courses = ({course}) => {
    console.log("Starting.....")
    const courseList = course.map(nameConent => nameConent)
    const mapEverything = () => courseList.map(course => <Course name={course.name} partsList={course.parts} id={course.id} key={course.id}/>)

    return (
        <>  
            {mapEverything()}
        </>

    )
}

export default Courses;