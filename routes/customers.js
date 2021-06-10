const express = require("express");

const customersRouter = express.Router();
const customersController = require("../controllers/customersController");

customersRouter.route('/')
    .get(customersController.customerHome)
    .post(customersController.addCustomer)

customersRouter
  .route("/add")
  .get(customersController.customerNew);

customersRouter.route('/:id')
    .get((req, res) => {
        res.send(`Request: GET /customers/${req.params['id']}`);
    })
    .delete(customersController.deleteCustomer) 
    .patch(customersController.updateCustomer);

module.exports = customersRouter;
