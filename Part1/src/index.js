import React, {useState} from 'react';
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
const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)



const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App1 = (props) => {
  const [ counter, setCounter ] = useState(0)
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const setToValue = (value) => setCounter(value)
  const setLeftToValue = (value) => setLeft(value)
  const setRightToValue = (value) => setRight(value)
  const [allClicks, setAll] = useState([])
  const [clicks, setClicks] = useState(
    {left: 0, right: 0}  
    )
  
    const handleLeftClick = () => {
      // const newClicks ={
      //   ...clicks,
      //   left: clicks.left + 1
      // }
      // setClicks(newClicks)
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }
    
    const handleRightClick = () => {
      // const newClicks = {
      //   ...clicks,
      //   right: clicks.right + 1
      // }
      // setClicks(newClicks)
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }


  return (
    <>
    <div>
      <Display counter={counter}/>
      <Button onClick={() => setToValue(counter + 1)}
        text = 'plus'
      />
      <Button onClick={() => setToValue(counter - 1)}
        text = 'minus'
      />
      <Button onClick={() => setToValue(0)}
        text = 'zero'
      />
      <Button onClick={() => setToValue(counter * 3)}
        text = 'x2'
      />
      <Button onClick={()=>setToValue(counter / 2)} 
        text = '/2'
      />
    </div>
    
    <div>
      <Display counter={left}/>
      <Display counter={right}/>
      <History allClicks={allClicks}/>
      <Button onClick={handleLeftClick} text = 'left'/>
      <Button onClick={handleRightClick} text = 'right'/>
    </div>
    </>
  )
}

ReactDOM.render(
  <App1 />, 
  document.getElementById('root')
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
