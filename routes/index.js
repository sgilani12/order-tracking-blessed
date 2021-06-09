const express = require('express');
require('../passport-config')

var indexRouter = express.Router();
var indexController = require('../controllers/indexController')


indexRouter.route('/')
    .get(passport.authenticate('jwt-cookiecombo', {
    session: false
}), indexController.dashboard);



module.exports = indexRouter;