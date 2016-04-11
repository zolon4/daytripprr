var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  local : {
    username: {type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    currentcity: String,
    currentstate: String
  }
});

var User = mongoose.model('User', userSchema)

module.exports = User;
