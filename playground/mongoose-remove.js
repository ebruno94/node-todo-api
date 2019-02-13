const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Remove all.
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Works like findOne that matches the first document it sees, and return the doc got removed.
// Todo.findOneAndRemove({_id: '5c648001fd5cdbfc9c863f58'}).then((todo) => {
//
// });

// Works just like findByIdAndRemove. Also returns doc.
// Todo.findByIdAndRemove('5c648001fd5cdbfc9c863f58').then((todo) => {
//   console.log(todo);
// });
