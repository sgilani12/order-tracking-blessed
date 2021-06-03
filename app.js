const express = require('express');

const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const customersRouter = require('./routes/customers');
const newCustomerRouter = require('./routes/newCustomer');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/customers', customersRouter);
app.use('/newCustomer', newCustomerRouter);

app.listen(port, () => {
    console.log(`Server listening on Port: ${port}`);
});

module.exports = app;
