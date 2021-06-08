const express = require('express');
const bodyparser = require('body-parser');
const user = require('./models/user')
const jwt = require('jsonwebtoken');
const genToken = require('./passport')

const app = express();
const port = 3000;


const urlParser = bodyparser.urlencoded({extended:true});

app.use(urlParser);


const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const customersRouter = require('./routes/customers');
const newOrderRouter = require('./routes/newOrder');
const LoginRouter = require('./routes/login');

app.set('views', './views');
app.set('view engine', 'ejs');


app.use('/', LoginRouter);
app.use('/dashboard', indexRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/customers', customersRouter);
app.use('/newOrder', newOrderRouter);

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server listening on Port: ${port}`);
});

module.exports = app;
