const express = require('express');
var loginController = require('../controllers/loginController')

var LoginRouter = express.Router();

LoginRouter.route('/')
    .get(loginController.loginHome)
    

module.exports = LoginRouter;