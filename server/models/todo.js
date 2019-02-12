var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    // Value must exist if required is true.
    required: true,
    // minimum Length validator,
    minlength: 1,
    // Remove trailing and leading white spaces
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = { Todo };
