const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

//
// var id = '5c633ebc86b35918365dcf082';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }
//
//
// // Query as many todos as you like.
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
//
// // Query and return one document AT MOST.
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })
//
// // Query to find by ID
// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo)
// }).catch((e) => console.log(e));

// CHALLENGE: Use User.findById to query picked ID.
// 3 Cases:
// 1) Query works, but no user. Print User not found
// 2) Query works, user found. Print user.
// 3) Handle other errors.



var userId = '5c63236a11a036b422990933'

User.findById(userId).then((user) => {
  if (!user){
    return console.log('User not found');
  }

  console.log('User By ID', JSON.stringify(user, undefined, 2));
}, (e) => console.log('INVALID ID', e));
