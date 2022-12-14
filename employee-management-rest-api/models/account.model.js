// importing mongo connection stuff 
const mongoose = require('./mongo');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const Account = new mongoose.Schema({
  firstName: String,
  email: {
    type: String,
    unique: true
  },
  salt: String,
  hash: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now},
  updatedBy: String,
  updatedOn: { type: Date, default: Date.now}
}, {
  strict: true
});

// define util fn to get the salt and hash out of the password 
Account.methods.setPassword = function(password){
  // convert p/w into salt and hash 
  // Let's encrypt using crypto
  this.salt = crypto.randomBytes(16).toString('hex');
  console.log(this.salt);
  // using the salt and with enc algo -- we'll get hash generated 
  this.hash = crypto.pbkdf2Sync(password,  this.salt, 68000, 512, 'sha512').toString('hex');
  console.log(this.hash);
}

// validating the password to return true or false
Account.methods.validatePassword = function(password){
  console.log(password);
  console.log(this.salt);
  console.log(this.hash);
  const hash = crypto.pbkdf2Sync(password,  this.salt, 68000, 512, 'sha512').toString('hex');
  return this.hash === hash;
}

// generating JWT
Account.methods.generateJWT = function(){
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10)
  }, 'NodeJS is wonderful');

}


module.exports = mongoose.model('Account', Account);