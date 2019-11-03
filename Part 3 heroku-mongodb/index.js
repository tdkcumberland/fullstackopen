require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let morgan = require('morgan');
const Persons = require('./models/personMongo');

morgan.token('request-info', function getName (req){
  return [req.body.name, req.body.number];
});

const app = express();

app.use(morgan(':url :method :response-time ms :request-info'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'));

app.get('/', (req, res) => {
  res.send('<h1>Tim\'s Phone Book AP</h1>');
});

app.get('/person', (req, res) => {
  Persons.find({}).then(persons => {
    res.json(persons.map(person=> person.toJSON()));
  });
});

// app.get('/person/:id', (req, res)=>{
//   const id = req.params.id
//   console.log(id)
//   Persons.findById(id)
//   .then(persons => res.send(persons))
//     .catch(error => res.status(404).end())
// })

app.get('/person/q?', (req, res)=>{
  const personName = req.query.name || "";
  const personNumber = req.query.number || "";
  console.log(req.query.name, req.query.number);
  let queryFinal ="";
  if (personName) {
    queryFinal = JSON.parse(`{"name" : {"$eq": "${personName}"}}`);
  } 

  if (personNumber){
    queryFinal = JSON.parse(`{"number" : {"$eq" : "${personNumber}"}}`);
  }
  console.log(queryFinal);
  Persons.find(queryFinal)
  .then(persons => {
    res.send(persons);
    console.log(persons);
  })
    .catch(error => 
      {
        res.send(`<h1>${(personName) || " "} ${(personNumber) || ""} combination cannot be found</h1>`).status(404).end();
      }    
    );
});

app.delete('/person/:id', (req, res) =>{
  const id = req.params.id;
  const deleteQuery = `{ "_id" : {"$oid" : "${id}"} }`;
  console.log(deleteQuery);
  Persons.findByIdAndRemove(id).then(persons => {
    res.send(
      '<h1>Delete successfull</h1>'
    );})
      .catch(error =>{
        res.send('<h1>Delete unsuccessfull</h1>').status(405).end();
      })
    ;
  // const newPersons = person.filter(res => eachPerons.name !==name)
  // res.json(newPersons)
  // res.status(204).end()
});

app.post('/person', (req, res)=>{
  const body = req.body;

  // console.log(body.name, body.number)
  if (!body.name || ! body.number) {
    return res.status(400).json({
      error : 'name or number is missing'
    });
  }

  const newPerson = new Persons({
    name : body.name,
    number : body.number,
  });

  newPerson.save().then(savedPerson =>{
    res.json(savedPerson.toJSON());
  });

});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const generateId = () => {
  return Math.floor(Math.random() * Math.floor(999999));
};