const express = require("express");

const customersRouter = express.Router();
const customersController = require("../controllers/customersController");
const api_customer = require("../models/api_customer")
/*
customersRouter.use((req, res, next) => {
    api_customer.log_customer(req.cookies.user_email);
    console.log("logger middlware")
    next();
})
*/
customersRouter.route('/')
    .get(customersController.customerHome)
    .post(customersController.addCustomer)

customersRouter.route("/add")
  .get(customersController.customerNew);

customersRouter.route('/:id')
    .get((req, res) => {
        res.send(`Request: GET /customers/${req.params['id']}`);
    })

    .delete(customersController.deleteCustomer) 
    .post(customersController.updateCustomer);


customersRouter.route('/delete/:id')
    .post(customersController.deleteCustomer)
module.exports = customersRouter;
