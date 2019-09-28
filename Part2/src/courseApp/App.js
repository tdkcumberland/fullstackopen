import React from 'react';
import './App.css';
import Courses from './Courses';

const App = ({course}) => {
  return (
    <>
      <Courses course={course} />
    </>
  )
}

export default App;
