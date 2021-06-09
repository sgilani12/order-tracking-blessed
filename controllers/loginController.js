var userModel = require('../models/user');
var genToken = require('../passport');
//test
var loginController = {
  loginHome(req, res){
    res.render('login')
  },

  authenticateUser(req,res){
    const {email, password} = req.body;
    const user = User.findByPk(email);

    if(user && user.authenticateUser(email, password)){
      res.redirect('/dashboard').json(genToken(user))
    }
    else{
      res.status(401).json({"message" : "Invalid credentials"})
    }

  }
}

module.exports = loginController;