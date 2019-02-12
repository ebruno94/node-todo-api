var mongoose = require('mongoose');

// New User Model CHALLENGE
var User = mongoose.model('Users', {
  email: {
    require: true,
    trim: true,
    type: String,
    minlength: 1
  }
})

module.exports = { User }
