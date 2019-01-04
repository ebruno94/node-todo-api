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
  
  // deleteMany => target many documents and delete them all.
  // db.collection('Todos').deleteMany({text: 'Eat midnight snack'}).then((result) => {
  //   console.log(result);
  //   // returns result object.
  //   // result: {ok: 1, n: 3}
  //   // ok: 1 means that the query succeeeded. n: 3 means 3 things were deleted.
  // });
  
  // // deleteOne => target one and delete. Targets the first one it finds.
  // db.collection('Todos').deleteOne({text: 'Eat midnight snack'}).then((result) => {
  //   console.log(result);
  // });
  
  // findOneAndDelete => find one value, return it back, and delete from db.
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })
  
  // CHALLENGE
  // Look for duplicate users. Delete all of them.
  db.collection('Users').deleteMany({name: 'Ernest'}).then((result) => {
    console.log('Deleting... success!');
  });
  // Find one document and delete it by ID.
  db.collection('Users').findOneAndDelete({ 
    _id: new ObjectID('5c2ee4d0bdfb6d37087841a3')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });
  
  // Closes connection.
  // db.close();
});
