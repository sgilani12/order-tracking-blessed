const express = require('express');
const loginController = require('../controllers/loginController')

var LoginRouter = express.Router();

LoginRouter.get('/', function (req, res, next) {
    res.render('logIn');
});

LoginRouter.route('/authenticate')
    .post(loginController.authenticate)
module.exports = LoginRouter;