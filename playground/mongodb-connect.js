// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
        }
    console.log('Connected to mongodb server');

    // db.collection('Todos').insertOne({
    //  text: 'Something to do',
    //  completed: false   
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    //Insert new doc into USERS (name,age, location)
    // db.collection('Users').insertOne({
    //     name: 'shimrit',
    //     age: 25,
    //     location: 'tel aviv, israel'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log ('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});