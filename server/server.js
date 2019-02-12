var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


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


var newUser = new User({
  email: 'ernnex@gmail.com'
});

newUser.save().then((d) => {
  console.log(JSON.stringify(d, undefined, 2));
}, (e) => {
  console.log('Unable to save', e);
})
