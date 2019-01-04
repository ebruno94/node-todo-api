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
  
  // Fetching from Todos collection. Calling find() without args will get everything. Find method returns MongoDB cursor which is a pointer to the documents. It has many methods.
  // .toArray method returns a promise.
  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  // Let's fetch the todos that has completed status of false.
  db.collection('Todos').find({completed: false}).toArray().then((docs)=> {
    console.log('Incomplete todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });
  
  // Fetch todo with the appropriate id.
  db.collection('Todos').find({
    _id: new ObjectID('5c2e8ceff3852c3f8c3c1c90')
  }).toArray().then((docs) => {
    console.log('Fetching with IDs');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });
  
  // using count method for cursor.
  db.collection('Todos').count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to count Todos', err);
  });
  
  // CHALLENGE
  // Query for all documents with the name Ernest in the users.
  db.collection('Users').find({name: 'Ernest'}).toArray().then((docs) => {
    console.log(`Here are the users with the name ${docs[0].name}`);
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Unable to find users', err);
  });
  
  // Closes connection.
  // db.close();
});
