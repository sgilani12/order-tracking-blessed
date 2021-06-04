CREATE DATABASE IF NOT EXISTS capstone_db;

USE capstone_db; 

-- customer_id auto-increments, does not require an entry when adding new customer
CREATE TABLE IF NOT EXISTS customers (
    customer_id int AUTO_INCREMENT,
    first_name varchar(255) NOT NULL,
    middle_name varchar(255),
    last_name varchar(255) NOT NULL,
    phone varchar(255) NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE,
    customer_notes varchar(255),
    shipping_address varchar(255) NOT NULL,
	billing_address varchar(255) NOT NULL,
    PRIMARY KEY (customer_id)
);

-- product_id auto-increments, does not require an entry when adding new product
CREATE TABLE IF NOT EXISTS products (
    product_id int AUTO_INCREMENT,
    SKU varchar(12) NOT NULL UNIQUE,
    price float NOT NULL,
    product_name varchar(255) NOT NULL,
    quantity int NOT NULL,
    description varchar(255),
    PRIMARY KEY (product_id)
);

-- order_id auto-increments, does not require an entry when adding new order
CREATE TABLE IF NOT EXISTS orders (
    order_id int AUTO_INCREMENT,
    time_of_order datetime NOT NULL,
    customer_id int NOT NULL,
    order_status_code enum('Draft','Open','Finalized','Preparing to ship',
    'Ready for shipping','Shipped','Delivered','Closed'),
    total_order_price float NOT NULL,
    order_notes varchar(255),
    PRIMARY KEY (order_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- In this table you can see all products that make up each order
CREATE TABLE IF NOT EXISTS items (
    order_id int,
    product_id int,
    quantity int,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE IF NOT EXISTS users (
    email varchar(255),
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    user_role enum('Customer Service Respresentative', 'Analyst') NOT NULL,
    user_password varchar(1000),
	PRIMARY KEY (email)
);

-- The below tables are for analytical purposes only

CREATE TABLE IF NOT EXISTS user_analytics (
    email varchar(255),
    login_time datetime,
    total_time datetime,
    PRIMARY KEY (email),
    FOREIGN KEY (email) REFERENCES users(email)
);

CREATE TABLE IF NOT EXISTS api_customers (
	user_email varchar(255),
    access_time datetime,
    PRIMARY KEY (user_email),
    FOREIGN KEY (user_email) REFERENCES users(email)
);

CREATE TABLE IF NOT EXISTS api_customers_id (
	user_email varchar(255),
    access_time datetime,
    PRIMARY KEY (user_email),
    FOREIGN KEY (user_email) REFERENCES users(email)
);                                         
										   
CREATE TABLE IF NOT EXISTS api_orders (    
	user_email varchar(255),                
    access_time datetime,                  
    PRIMARY KEY (user_email),               
    FOREIGN KEY (user_email) REFERENCES users(email)
);

CREATE TABLE IF NOT EXISTS api_orders_id (
	user_email varchar(255),
    access_time datetime,
    PRIMARY KEY (user_email),
    FOREIGN KEY (user_email) REFERENCES users(email)
);

CREATE TABLE IF NOT EXISTS api_products (
	user_email varchar(255),
    access_time datetime,
    PRIMARY KEY (user_email),
    FOREIGN KEY (user_email) REFERENCES users(email)
);

CREATE TABLE IF NOT EXISTS api_products_id (
	user_email varchar(255),
    access_time datetime,
    PRIMARY KEY (user_email),
    FOREIGN KEY (user_email) REFERENCES users(email)
);

select * from customers;
select * from products;
select * from users;
