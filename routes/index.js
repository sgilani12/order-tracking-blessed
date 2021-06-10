const express = require('express');

require('../passport-config')

var indexRouter = express.Router();
var indexController = require('../controllers/indexController')


indexRouter.route('/')
    .get((req, res) => res.render('index'))


module.exports = indexRouter;
