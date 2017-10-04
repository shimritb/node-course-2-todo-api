var {mongoose} = require('../db/mongoose');


var User = mongoose.model('User', {
    name: {
        type: String
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    }});

    var newUser = new User({
        name: 'shimrit',
        email: 'ghy@q124545u'
    });

    newUser.save().then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2));
    }, (err) => {
        console.log('Unable to save user',err);
    });

    module.exports = {User};