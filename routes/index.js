const express = require('express');
const passport = require ('passport')

var indexRouter = express.Router();

indexRouter.route('/')
    .get((req, res) => res.render('dashboard'))


module.exports = indexRouter;
