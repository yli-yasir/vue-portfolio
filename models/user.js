const mongoose = require('mongoose');

module.exports = mongoose.model('user',mongoose.Schema{
    _id: String,
    password: String
});

