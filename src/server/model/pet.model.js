var mongoose = require('mongoose'),
  PetSchema = new mongoose.Schema({
    name: String,
    status: String
  });

module.exports = mongoose.model('Pet', PetSchema);