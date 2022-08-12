const passport = require("passport");
const Account = require("../models/account.model");

exports.signup = (req, res) => {
  console.log(req);
  const accountDao = new Account(req.body);
  accountDao.setPassword(req.body.password);
  // generate salt and hash for the p/w 
  // if you do not have strict schema, remove the p/w, then create the account. 
  console.log(accountDao);

  accountDao.save( (err, data) => {
    if(!err){
      console.log(data);
      res.json({
        status: 'Signup Successful!'
      });
    }else{
      console.log(err);
      res.json(err)
    }
  });
}

exports.login = (req, res) => {
  console.log(req);

  // using passportjs -- we need to authenticate 
  // post auth, if email and passwords are valid -- token should be generated
  passport.authenticate('local', function(err, account, info) {
    // if passport throws any err
    if(err){
      res.send(err);
    }

    // if account found
    if(account){
      //let's generate token 
      const authToken = account.generateJWT()
      res.send({status: 'Logged in Successfully!', token: authToken});
    }else{
      res.send(info);
    }

  })(req, res);
}