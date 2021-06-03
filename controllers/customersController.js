var customerModel = require('../models/customer');

var customersController={
    customerHome(req, res) {
        // get customers from db as list of objects
    },
    addCustomer(req, res) {
        // get form values from req.body
        // init as object
        // add/save user to db
        // re-direct to customerHome
    }
}

module.exports = customersController;