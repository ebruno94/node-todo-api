var mongoose = require('mongoose');

// Tell mongoose to use built in promise
mongoose.Promise = global.Promise;
// Tell mongoose to connect
mongoose.connect('mongodb://localhost:27017/TodoApp');

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

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// // Responsible for actually saving into db.
// // It is a promise.
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc)
// }, (e) => {
//   console.log('Unable to save todo');
// });

// Challenge: Create a new entry.
var newTodo2 = new Todo({
  // Careful of type casting!
  text: '            Edit video           '
})

newTodo2.save().then((d) => {
  console.log(JSON.stringify(d, undefined, 2));
}, (e) => {
  console.log('Unable to save', e);
});


// New User Model CHALLENGE
var User = mongoose.model('Users', {
  email: {
    require: true,
    trim: true,
    type: String,
    minlength: 1
  }
})

var newUser = new User({
  email: 'ernnex@gmail.com'
});

newUser.save().then((d) => {
  console.log(JSON.stringify(d, undefined, 2));
}, (e) => {
  console.log('Unable to save', e);
})
