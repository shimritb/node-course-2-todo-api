var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://shimrit ziskand:1986shimbzis@ds115045.mlab.com:15045/todoapp' || 'mongodb://localhost:27017/Todoapp', {useMongoClient: true});

//mongodb://<dbuser>:<dbpassword>@ds115045.mlab.com:15045/todoapp

module.exports = {mongoose};
