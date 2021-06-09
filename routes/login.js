const express = require('express');
const loginController = require('../controllers/loginController')
var jwt = require('jsonwebtoken');
require('dotenv').config();

var LoginRouter = express.Router();

LoginRouter.get('/', function (req, res, next) {
    res.render('logIn');
});

LoginRouter.route('/authenticate')
    .post(('/login', passport.authenticate('local'), (req, res) => {
        loginController(req,res);
        
    }))

LoginRouter.get('/test', (req,res) => {
        console.log(req.user);
        console.log(req.cookies);
        console.log(req.signedCookies);
        res.redirect('/')
    })

module.exports = LoginRouter;