var userModel = require('../models/user')
var jwt = require('jsonwebtoken');
require('dotenv').config();

var loginController = {
  authenticate(req, res){
    userModel.authenticate(req.body.email,req.body.password).then(result => {
      if(result){
        print(result)
        /*Need to generate and send/store token, currently a placeholder*/
        jwt.sign({email: req.body.email}, process.env.AUTH_SECRET, (err, token) =>{
          if (err) return res.json(err)
          console.log(req.body.email)
          res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: true,
            signed: true,
            secure: true
          });
          return res.json({
            jwt:token
          })
        })
      }
      else{
        res.redirect('/')
      }
    })
  }
}

module.exports = loginController