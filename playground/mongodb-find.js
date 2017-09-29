// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
        }
    console.log('Connected to mongodb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59ccde1123010816e4bebbe9')
    // }).toArray().then((docs) => {
    //     console.log(docs);      
    //  }, (err) => {
    //     console.log('Unable to fetch todos', err);
    //  });
    // // db.close();


    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`todos count: ${count}`);      
    //  }, (err) => {
    //     console.log('Unable to fetch todos', err);
    //  });

    
    db.collection('Users').find({name: 'shimrit'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));      
     }, (err) => {
        console.log('Unable to fetch todos', err);
     });

});

