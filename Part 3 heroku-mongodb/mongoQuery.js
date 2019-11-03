const mongoose = require('mongoose');

if (process.argv.length<3){
    console.log('give password as argument');

    process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://tdkcumberland:${password}@cluster0-0yfaq.azure.mongodb.net/phoneBook?retryWrites=true&w=majority`;

mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology: true}).then(() => console.log('connected!') ).catch(error => console.log(error));

const phoneSchema = new mongoose.Schema({
    name : String,
    number: String,
});

const Phones = mongoose.model('phonBook', phoneSchema);

Phones.find({}).then(result => {
    result.forEach(phone => {
      console.log(phone);
    });
    mongoose.connection.close();
  });