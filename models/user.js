const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: String,
    password: {type:String,required: true}
});

userSchema.methods.verifyPassword = function(password){
    return this.password === password;
}

module.exports = mongoose.model('user',userSchema);



