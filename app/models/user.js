var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var User = mongoose.Schema({
    local : {
        email : String,
        password : String    
    }
});

//generating a hash
User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);   
};

//check if the password is valid
User.methods.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);   
};

//expose the user model to the app
module.exports = mongoose.model('User', User);