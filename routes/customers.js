const express = require('express');

const customersRouter = express.Router();
const customersController = require('../controllers/customersController')

customersRouter.post('/', (req, res) => {
    res.send(200, customersController.addCustomer(req,res));
});

customersRouter.route('/')
    .get(customersController.customerHome)
    .post(customersController.addCustomer)

customersRouter.route('/add')
    .get(customersController.customerNew)   

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