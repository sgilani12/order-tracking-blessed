const express = require('express');
const passport = require ('passport')

var indexRouter = express.Router();

indexRouter.get('/', passport.authenticate('jwt',{session: false}),function(req, res) {
    res.render('index');
});


module.exports = indexRouter;