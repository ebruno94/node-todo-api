var mongoose = require('mongoose');

// Tell mongoose to use built in promise
mongoose.Promise = global.Promise;
// Tell mongoose to connect
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
