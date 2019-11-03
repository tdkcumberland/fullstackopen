const mongoose = require('mongoose');
require('dotenv').config();

const url = 'mongodb+srv://tdkcumberland:ductien1603@cluster0-0yfaq.azure.mongodb.net/phoneBook?retryWrites=true&w=majority';

console.log(url);

mongoose
    .connect(url, {useNewUrlParser : true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log('connected to MongoDB!') )
    .catch(error => console.log('error connecting to MongoDB:', error.message));

const phoneSchema = new mongoose.Schema({
    name : String,
    number: String,
});

phoneSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    // delete returnedObject._id
    // delete returnedObject.__v
  }
});

module.exports = mongoose.model('phonBook', phoneSchema);
