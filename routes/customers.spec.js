const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../app');

chai.use(chaiHttp);

describe('/customers', () => {

    describe('retrieve list of all customers, i.e., /customers', (done) => {
        // leave empty for now
    });
});