import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content2 part={course} />
      <Total exercises={course} />
    </>
  )
}

const Header = (props) => {
  // console.log(props.course.name)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content2 = (props) => {
  const testPart = [];
  for (var i = 0; i < props.part.parts.length; i+=1){
    // console.log(i)
    // console.log(props.part.parts[i])
    console.log(props.part.parts[i].name.toString())
    testPart.push(<p>{props.part.parts[i].name} {props.part.parts[i].exercises}</p> )
  }

  const listItems = props.part.parts.map(both =>
  <p key={both.name.toString()}>{both.name} {both.exercises}</p>
  );
 
  return (
    listItems
  )
}

const Total = (props) => {
  var total = 0;
  for (var i = 0; i < props.exercises.parts.length; i+=1) {
    total += (props.exercises.parts[i].exercises);
  }
  return (
    <p>Number of exercises {total}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
