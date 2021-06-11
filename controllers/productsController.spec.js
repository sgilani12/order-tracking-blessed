const chai = require('chai');
// const chaiHttp = require('chai-http');
const should = chai.should();
const expect = require('chai').expect;
const orderModel = require("../models/order");
const customerModel = require('../models/customer');
const productModel = require('../models/product');

describe('productConrtoller', () => {

    let fdata;
    before((done) => {
        // const mockCustomer = {
        //     first_name:"my",
        //     middle_name:"tjx",
        //     last_name:"customer",
        //     phone:"5552221111",
        //     email:"newemailhere1@tjx.com",
        //     customer_notes:"please work",
        //     shipping_address:"100 tjx rd",
        //     billing_address:"100 tjx rd"
        // }
        productModel.getProductList((err,data)=>{
            // console.log(data)
            fdata = data;
            done();
        });
    });

    describe('GET add', () => {
        it("should get the ARRAY of products", () => {
            expect(fdata).to.be.an('array');
        });
    });
});