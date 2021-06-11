
var userModel = require('../models/user');
var jwt = require('jsonwebtoken');
require('dotenv').config();

var loginController = {
  loginHome(req, res){
    res.render('login')
  },

  authenticate(req, res){
    userModel.authenticate(req.body.email,req.body.password).then(result => {
      if(result){
        jwt.sign({email: req.body.email}, process.env.AUTH_SECRET, {expiresIn: process.env.LOGIN_DURATION},
          (err, token) => {
        if (err) return res.json(err);
        // Send Set-Cookie header
        res.cookie('user_email', req.body.email)
        .cookie('jwt', token, {
            httpOnly: true,
            sameSite: true,
            signed: true,
            secure: true,
        });
        res.redirect('/dashboard')
    })}
      else{
        res.redirect('/')
      }
    })
  },

  logout(req, res){
    res.cookie('jwt', 0);
    res.redirect('/');
  }
}

module.exports = loginController
