const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000

// BodyParser is gonna take JSON and convert it into an Object
// .json() returns a function which is the middleware we give to express.
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((d) => {
    res.send(d);
  }, (e) => {
    res.status(400).send(e);
  })
});

// GET /todos to read Todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

// GET /todos/123434234234
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)){
    return res.status(404).send({})
  };

  Todo.findById(id).then((todo) => {
    if (!todo){
      return res.status(404).send({});
    }
    return res.send({todo})
  }, (e) => res.status(400).send({}));
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo || todo === null){
      return res.status(404).send();
    }
    return res.status(200).send({todo});
  }, (e) => res.status(400).send());
})

// PATCH - update data
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;

  // pick takes an object, and array of properties you wanna pull off if they exist.
  var body = _.pick(req.body, ['text', 'completed']);

  // Validate id
  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime(); // return JS timestamp, # of milliseconds from Jan 1st 1970.
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
})

app.listen(port, () => {
  console.log(`Started on port ${port}!`);
});

module.exports = {app};
