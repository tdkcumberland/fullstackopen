const express = require('express')
let morgan = require('morgan')
const bodyParser = require('body-parser')

morgan.token('request-info', function getName (req){
  return [req.body.name, req.body.number]
})
// morgan.token('number', function getNumber (req) {
//   return req.body.number
// })

const app = express()

app.use(morgan(':url :method :response-time ms :request-info'))
app.use(bodyParser.json())

let person = [
  {
    "id": "2a5646c2-a23e-4bf4-a110-607f569ac177",
    "name": "TIMOTHY",
    "number": "125151"
  },
  {
    "id": "f32e691d-0be2-4985-b9f1-be03260c9b54",
    "name": "ROARK",
    "number": "65859"
  },
  {
    "id": "2e5ec43e-3559-4f2b-951f-80ccfef06f6f",
    "name": "CUMBERLAND",
    "number": "911"
  },
  {
    "id": "b85dee64-969c-4cd7-a0f9-f622062043df",
    "name": "HOWARD",
    "number": "9909099"
  },
  {
    "name": "JOHN",
    "number": "5747423",
    "id": "a451fb9c-fc9e-45f2-99d9-ce845eee4243"
  },
  {
    "id": "f17f7005-08bd-43a0-ad29-965c0d2c9caa",
    "name": "GALT",
    "number": "9999999"
  },
  {
    "name": "SHERLOCK",
    "number": "124124",
    "id": "85a2a49e-f3df-42f5-9a7a-76bfed29f024"
  },
  {
    "name": "HOLMES",
    "number": "679679",
    "id": "d868b443-f661-493b-a2e9-915353bd35fa"
  },
  {
    "name": "THANH",
    "number": "160392",
    "id": "2b63bada-7eb8-43fc-8a83-915973964632"
  },
  {
    "name": "DUNCAN",
    "number": "6584",
    "id": "97f48dfb-cacb-4fc3-90f8-df4cc18e6edc"
  },
  {
    "name": "UPMA",
    "number": "86706",
    "id": "ad479548-3a8c-46b7-8a6d-f0b825905d19"
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Tim\'s Phone Book AP</h1>')
})

app.get('/person', (req, res) => {
  res.json(person)
})

app.get('/person/:name', (req, res)=>{
  const name = req.params.name
  const personOut = person.find(res => eachPerson.name ===name)

  if (personOut) {
    res.json(personOut)
  } else {
    res.status(404).end()
  }
})

app.delete('/person/:name', (req, res) =>{
  const name = req.params.name
  const newPersons = person.filter(res => eachPerons.name !==name)
  res.json(newPersons)
  res.status(204).end()
})

app.post('/person', (req, res)=>{
  const body = req.body

  // console.log(body.name, body.number)
  if (!body.name || ! body.number) {
    return res.status(400).json({
      error : 'name or number is missing'
    })
  } else if (person.filter(eachPerson => eachPerson.name === body.name).length >0){
    return res.status(401).json({
      error : 'name must be unique'
    })
  }

  const newPerson = {
    name : body.name,
    number : body.number || "000",
    // date : new Date(),
    id : generateId(),
  }

  person = person.concat(newPerson)
  response.json(newPerson)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const generateId = () => {
  return Math.floor(Math.random() * Math.floor(999999))
}