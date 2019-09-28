import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './courseApp/App';
import * as serviceWorker from './serviceWorker';
import AppNotes from './noteApp/AppNotes';
import AppPhoneBook from './phoneBookApp/AppPhoneBook'
import axios from 'axios'
import Country from './countryApp/Country'

const courses = 
[
    {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
]

const notes_OLD = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]


// course App 
// ReactDOM.render(<App course={courses}/>, document.getElementById('root'));


// coutry API
// const promise = axios.get('https://restcountries.eu/rest/v2/all').then( response => {
//   // console.log(response)
//   const country = response.data
//   console.log(country)
//   ReactDOM.render(<Country country={country} />, document.getElementById('root'));
// })


//phone book
const promise = axios.get('http://localhost:3001/phone').then(response =>{
  const person = response.data
  ReactDOM.render(<AppPhoneBook  person={person}/>, document.getElementById('root'));
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
