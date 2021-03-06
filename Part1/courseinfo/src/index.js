import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content part={part1} count={exercises1} />
      <Content part={part2} count={exercises2} />
      <Content part={part3} count={exercises3} />
      <Total exercises={[exercises1, exercises2,exercises3]} />
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <Parts part={props.part} count={props.count}/>
  )
}

const Parts = (props) =>{
  return(
    <p>{props.part} {props.count}</p>
  )
}

const Total = (props) => {
  var total = 0;
  for (var i = 0; i < props.exercises.length; i+=1) {
    total += (props.exercises[i]);
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
