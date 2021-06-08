const express = require('express');
const newOrderRouter = express.Router();

newOrderRouter.route('/')
    .get((req, res) => {
        res.render('newOrder');
    });

module.exports = newOrderRouter;