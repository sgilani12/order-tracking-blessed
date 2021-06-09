var userModel = require('../models/user')
var jwt = require('jsonwebtoken');
require('dotenv').config();

var loginController = {
  loginHome(req, res){
    res.render('login')
  },

  authenticate(req, res){
    userModel.authenticate(req.body.email,req.body.password).then(result => {
      if(result){
        jwt.sign({email: req.body.email}, process.env.AUTH_SECRET, (err, token) => {
        if (err) return res.json(err);
        console.log('loginController')
        console.log(result)
        // Send Set-Cookie header
        res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: true,
            signed: true,
            secure: true
        });
        // Return json web token
        return res.json({jwt: token});
    })}
      else{
        res.redirect('/')
      }
    })
  }
}

module.exports = loginController