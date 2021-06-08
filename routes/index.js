const express = require('express');

var indexRouter = express.Router();

indexRouter.get('/', function (req, res, next) {
    res.render('index');
});


module.exports = indexRouter;