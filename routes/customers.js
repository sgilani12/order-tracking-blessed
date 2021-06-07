const express = require('express');

const customersRouter = express.Router();
const customersController = require('../controllers/customersController')

customersRouter.route('/delete/:id')
    .post(customersController.deleteCustomer);

customersRouter.route('/')
    .post(customersController.addCustomer)


customersRouter.route('/')
    .get(customersController.customerHome)
    .post((req, res) => {
        res.send(`Request: POST /customers/${req.params['id']}`);
    });

customersRouter.route('/newCustomer')
    .get(customersController.customerNew);

customersRouter.route('/delete')
    .get(customersController.customerDelete);


customersRouter.route('/:id')
    .get((req, res) => {
        res.send(`Request: GET /customers/${req.params['id']}`);
    })
    .delete((req, res) => {
        res.send(`Request: DELETE /customers/${req.params['id']}`); 
    }) 
    .put((req, res) => {
        res.send(`Request: PUT /customers/${req.params['id']}`);
    });


module.exports = customersRouter;