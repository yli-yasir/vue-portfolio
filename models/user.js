const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    _id: String,
    password: {type:String,required: true}
});

module.exports = mongoose.model('user',userSchema);



