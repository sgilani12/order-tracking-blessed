const express = require('express');
const newCustomerRouter = express.Router();

newCustomerRouter.route('/')
    .get((req, res) => {
        res.render('newCustomer');
    });

module.exports = newCustomerRouter;