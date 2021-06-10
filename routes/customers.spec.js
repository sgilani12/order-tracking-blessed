//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
const customersController = require('../controllers/customersController');
let should = chai.should();
const expect = require('chai').expect;

chai.use(chaiHttp);

describe('customers', () => {

});