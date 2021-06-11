const express = require('express');

var ordersRouter = express.Router();
var ordersController = require('../controllers/ordersController')

ordersRouter.route('/')
    .get(ordersController.orderHome)
    .post(ordersController.addOrder)

ordersRouter.route('/add')
    .get(ordersController.newOrder)

ordersRouter.route('/:id')
    .get((req,res) => {
        keyValues = "";
        for(key of Object.keys(req.params)){
            keyValues += key;
            keyValues += ": "
            keyValues += req.params[key]
            keyValues += "\n"
        }
        res.send('Request: GET /orders parameters:\n'+keyValues)
    })
    .put((req,res) => {
        res.send('Request: POST /orders'+req.params['id'])
    })
    .delete((req,res) => {
        res.send('Request: DELETE /orders'+req.params['id'])
    })
 
module.exports = ordersRouter;
