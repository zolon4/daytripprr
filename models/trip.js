var mongoose = require('mongoose');

var tripSchema = new mongoose.Schema({
    destination: {type: String, required: true},
    origin: {type: String, required: true},
    distance: {type: String, required: true},
    duration: {type: String, required: true},
    userId: String,
    completed: Boolean
});

var Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip;
