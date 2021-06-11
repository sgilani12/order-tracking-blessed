//During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');

chai.use(chaiHttp);

describe('customers', () => {
    it('should grab the customer page', (done) => {
        chai.request(app)
        .get('/customers')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});