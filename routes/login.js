const express = require('express');
var loginController = require('../controllers/loginController')
var jwt = require('jsonwebtoken');
require('dotenv').config();

var LoginRouter = express.Router();

LoginRouter.route('/')
    .get(loginController.loginHome)

LoginRouter.route('/authenticate')
    .post(('/login', passport.authenticate('jwt-cookiecombo'), (req, res) => {
        loginController.authenticate(req,res);
}))

/*  A route for testing login configuration
LoginRouter.get('/test', (req,res) => {
    console.log(req.user);
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.redirect('/')
})
*/
module.exports = LoginRouter;