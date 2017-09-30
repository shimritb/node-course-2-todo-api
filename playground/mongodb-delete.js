const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
        }
    console.log('Connected to mongodb server');

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//     console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
//     console.log(result);
// });

// //findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//     console.log(result);
// });


//a challenge

//deletMany
// db.collection('Users').deleteMany({name: 'shimrit'}).then((docs) => {
//     console.log(docs);
// });

//findOneAndDeleteByid
db.collection('Users').findOneAndDelete({
    _id : new ObjectID ('59ceb3834af53edfe3ad19d5')
}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2))
})
    // db.close
});