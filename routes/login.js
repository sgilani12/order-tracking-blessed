const express = require('express');

var LoginRouter = express.Router();

LoginRouter.get('/', function (req, res, next) {
    res.render('logIn');
});


module.exports = LoginRouter;