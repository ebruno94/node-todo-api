// Get Mongo client lets us connect to mongo server and issue commands in db.
// const MongoClient = require('mongodb').MongoClient;
// using ES6 object destructuring...
// ObjectID lets us create ids on the fly.
const {MongoClient, ObjectID} = require('mongodb');

// Connect to the DB. 2 args (url where DB lives (string), callback function (that fires if connection success or fail));
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  // Insert new record into collection. Arg: string name of collection you want to insert into.
  // InsertOne lets you insert new document into collection. Two args:
  // 1st: Object storing key-value pairs in doc.
  // 2nd: Callback function fired when things go well or fail.
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable insert todo', err);
  //   }
  // 
  //   // JSON stringify to pretty print
  //   // result.ops store all the docs inserted.
  //   // undefined for filter function, indentation of 2.
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });
  
  // CHALLENGE
  // Insert new doc into Users collection.
  // Name property, age property, location property.
  // db.collection('Users').insertOne({
  //   // You can overwrite id.
  //   // _id: 123,
  //   name: 'Ernest',
  //   age: 24,
  //   location: 'Seattle'
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert new User');
  //   }
  //   // ID is a 12 byte value 
  //   // first 4 bytes time stamp
  //   // next 3 are machine identifiers
  //   // next 2 process ID.
  //   // last 3 byte counter, 3 bytes of ID.
  //   // result.ops is an array of all the documents that got inserted.
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // 
  //   // this accesses the first document in the array.
  //   // .getTimestamp gets the timestamp from the id.
  //   console.log(result.ops[0]._id.getTimestamp());
  // })
  
  // Closes connection.
  db.close();
});
