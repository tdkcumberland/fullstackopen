import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({text, value, clickCount}) => {
  if (clickCount === 0){
    return (
      <tr>
      <td>{text}</td>
      <td>no feed back gathered</td>
    </tr>
      
    )
  }
    return (
      <>
        <tr>
          <td>{text}</td>
          <td>{String(value)}</td>
        </tr>
      </>
    )
}

const StatisticTable = ({good, bad, neutral, clickCount}) => {
  if (clickCount === 0){
    return(
      <>
      <div>
        <b><i>no feedback has been gathered</i></b>
      </div>
      </>
    )
  }
  return (
    <>
      <table>
        <tbody>
          <Statistic text='good' value={good} clickCount={clickCount}/>
          <Statistic text='neutral' value={neutral} clickCount={clickCount}/>
          <Statistic text='bad' value={bad} clickCount={clickCount}/>
          <Statistic text='all' value={bad + good + neutral} clickCount={clickCount}/>
          <Statistic text='average' value={(bad*-1 + good*1 + neutral*0)/(bad + good + neutral)} clickCount={clickCount}/>
          <Statistic text='positive' value={good/(bad + good + neutral) + '%'} clickCount={clickCount}/>
        </tbody>
      </table>
    </>
  )
}

const HighestVote = ({vote,anecdotes}) =>{
  console.log(Math.max(...vote))
  console.log(anecdotes[Math.max(...vote)])
  return(
    <>
      <div>
        <p>{anecdotes[Math.max(...vote)]}</p>
        with {Math.max(...vote)} votes
      </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App1 = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clickCount, setCount] = useState(0)
  const [selected, setSelected] = useState(0)
  // const [vote, setVote] = useState({0 : 1, 1 : 2, 2 : 3, 3: 4,4 : 5,5 : 6})
  const [vote, setVote] = useState([0,1,2,3,4,5])

  const onGoodClick = () => {setGood(good + 1); setCount(clickCount + 1)}
  const onNeutralClick = () => {setNeutral(neutral + 1); setCount(clickCount + 1)}
  const onBadClick = () => {setBad(bad+ 1); setCount(clickCount + 1)}
  // const onReset = () => {
  //   setGood(0)
  //   setBad(0)
  //   setNeutral(0)
  // }
  const onSelect = () => {
    setSelected(Math.floor((Math.random() * 6) + 0))
  }
  const onVoteClick = () => {
    setVote({...vote, vote:vote[selected]+=1})
    // console.log(vote)
  }

  return (
    <>
    <h1>quotes</h1>
    <div>
      {props.anecdotes[selected]} 
    </div>

    <div>
        has {vote[selected]} votes
    </div>
    <Button onClick={onVoteClick} text='vote'/>
    <Button onClick={onSelect} text='next anecdote'/>
    <h1>
      Anecdote with the most votes
    </h1>
    <HighestVote vote={vote} anecdotes={anecdotes}/>
    
    <h1>give feedback</h1>
    <div>
      <Button onClick={onGoodClick} text='good'/>
      <Button onClick={onNeutralClick} text='neutral'/>
      <Button onClick={onBadClick} text='bad'/>
      {/* <Button onClick={onReset} text='reset'/> */}
    </div>
    <h1>statistic</h1>
    <StatisticTable good={good} bad={bad} neutral={neutral} clickCount={clickCount} />
    </>
  )
}

ReactDOM.render(
    <App1 anecdotes={anecdotes}/>, 
    document.getElementById('root')
)
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();