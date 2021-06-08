const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000;


const urlParser = bodyparser.urlencoded({extended:true});

app.use(urlParser);
app.use(session({
    secret: 'backend is backbone',
    resave: false,
    saveUninitialized: false
}));

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

app.use(express.static("static"));

app.listen(port, () => {
    console.log(`Server listening on Port: ${port}`);
});

module.exports = app;
