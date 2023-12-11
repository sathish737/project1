const mongoose = require('mongoose');

// Create a Mongoose schema
const userSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  date:String,

});

// Create a Mongoose model based on the schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;