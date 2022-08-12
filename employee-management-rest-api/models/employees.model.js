// importing mongo connection stuff 
const mongoose = require('./mongo');

// Let's have schema for the collection 
// building a collection with field and datatype
const Employee = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now},
  updatedBy: String,
  updatedOn: { type: Date, default: Date.now}
}, {
  strict: false
});

module.exports = mongoose.model('Employee', Employee);
// We should export it