const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: String,
    password: String
});

userSchema.methods.verifyPassword = function(password){
    return this.password === password;
}

module.exports = mongoose.model('user',userSchema);



