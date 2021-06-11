const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const user = require('./models/user')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const api_customer = require('./models/api_customer')
const api_order = require('./models/api_order')
const api_product = require('./models/api_products')
require('dotenv').config()

const app = express();
const port = 8080;


const urlParser = bodyparser.urlencoded({extended:true});

app.use(urlParser);
app.use(express.json());
app.use(session({
    secret: 'backend is backbone',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000
      }
}));
app.use(cookieParser(process.env.AUTH_SECRET))



const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const customersRouter = require('./routes/customers');
const newOrderRouter = require('./routes/newOrder');
const LoginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');

app.set('views', './views');
app.set('view engine', 'ejs');

const options = {session: false, failureRedirect: '/'}
/*
app.use((req, res, next) => {
    console.log(req.cookies);
    switch(req.path.split('/')[1]){
        case 'customers':
            api_customer.log_customer(req.cookies.user_email);
            break;
        case 'orders':
            api_order.log_order(req.cookies.user_email);
            break;
        case 'products':
            api_product.log_product(req.cookies.user_email);
            break;
    }
    console.log("logger middlware")
    next();
})
*/
app.use('/', LoginRouter);
app.use('/logout', logoutRouter);
app.use('/dashboard', passport.authenticate('jwt-cookiecombo', options), indexRouter);
app.use('/products', passport.authenticate('jwt-cookiecombo', options), productsRouter);
app.use('/orders', passport.authenticate('jwt-cookiecombo', options), ordersRouter);
app.use('/customers', passport.authenticate('jwt-cookiecombo', options), customersRouter);
app.use('/newOrder', passport.authenticate('jwt-cookiecombo', options), newOrderRouter);
/*

app.use('/dashboard', indexRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/customers', customersRouter);
app.use('/newOrder', newOrderRouter);
*/
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server listening on Port: ${port}`);
});

module.exports = app;
