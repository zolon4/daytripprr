var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
 name: {type: String, required: true },
 email: { type: String, required: true, unique: true},
 currentcity: String
});

var User = mongoose.model('User', userSchema)

module.exports = User;
