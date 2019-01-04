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
  
  // findOneAndUpdate => same as findOneAndDelete.
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c2ef10e3568075f3aeb2413')
    }, {
    // Use Update Operator $set
      $set: {
        completed: true
      }
    }, {
    returnOriginal: false
    }).then((result) => {
    console.log(result);
  });
  
  // CHALLENGE!
  // Change user in DB's name to mine and increment the age by 1.
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c2e8decd2011034e431e994')
    }, {
      // Change name.
      $set: {
        name: 'Ernest'
      },
      // Increment +1
      $inc: {
        age: +1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
  });
  
  // Closes connection.
  // db.close();
});
