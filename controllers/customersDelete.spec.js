const chai = require('chai');
// const chaiHttp = require('chai-http');
const should = chai.should();
const expect = require('chai').expect;
const customerModel = require("../models/customer");

describe('customer delete', () => {

    let cList;
    let num1, num2;
    
    before((done) => {
        customerModel.getCustomerList((err, data) => {
            cList = data;
            // console.log("1" + cList); produces an array of all the customers
            num1 = cList.length;
            console.log("num1: " + num1);
            done();
        });
    });

    beforeEach((done) => {
        customerModel.deleteCustomer(313, (err, deleted) => {
            console.log("Error" + err);
            console.log("deleted: " + deleted);
            done();
        });
    });

    afterEach((done) => {
        customerModel.getCustomerList((err, data) => {
            num2 = data.length;
            console.log("num2: " + num2);
            done();
        });
    });

    describe('Get customer List', () => {
        it("should be an array", () => {
            // console.log("The customer ID is: " + cList[0].customer_id);
            expect(cList).to.be.an('array');
        });
    });

    describe('DEL', () => {
        it("should delete", () => {
            console.log(num2 + " is less than " + num1);
            expect(num1).to.be.eq(num2 + 1);
        });
    });

});