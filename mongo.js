const mongoose = require('mongoose');

if (process.argv.length<3){
    console.log('give password as argument');

    process.exit(1);
} else if (process.argv.length>=3){
    const password = process.argv[2];
    const url = `mongodb+srv://tdkcumberland:${password}@cluster0-0yfaq.azure.mongodb.net/phoneBook?retryWrites=true&w=majority`;
    mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology: true}  ).then(() => console.log('connected!') ).catch(error => console.log(error));
    const phoneSchema = new mongoose.Schema({
        name : String,
        number: String,
    });
    const Phones = mongoose.model('phonBook', phoneSchema);
    if (process.argv.length === 3){
        console.log('finding...');
        Phones.find({}).then(result => {
            result.forEach(phone => {
              console.log(phone.name, phone.number);
            });
            mongoose.connection.close();
            console.log('closed connnection');
        });
    } else {
        console.log('adding...');
        const nameToAdd = process.argv[3];
        const numberToAdd =process.argv[4];

        const phone = new Phones({
            name : nameToAdd,
            number : numberToAdd,
        });

        phone.save().then( response => {
            console.log(`add ${nameToAdd} ${numberToAdd} to the database`);
            mongoose.connection.close();
            console.log('closed connnection');
        });
    }
}














