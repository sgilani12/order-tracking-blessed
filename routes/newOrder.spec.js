let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');

chai.use(chaiHttp);

describe('new order page', () => {
    it('should grab the new order page', (done) => {
        chai.request(app)
        .get('/newOrder')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});