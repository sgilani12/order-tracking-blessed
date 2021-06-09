const express = require('express');
require('../passport-config')

var indexRouter = express.Router();

indexRouter.get('/', passport.authenticate('jwt-cookiecombo', {
    session: false
}), (req, res, next) => {
    console.log("test")
    console.log(req.user)
    res.render('index')
});



module.exports = indexRouter;