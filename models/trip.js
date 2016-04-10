var mongoose = require('mongoose');

var tripSchema = new mongoose.Schema({
 desination: {type: String, required: true },
 startPoint: { type: String, required: true, unique: true},
 housing: Number
});

var Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip;
