let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');

chai.use(chaiHttp);

describe('home (index) page', () => {
    it('should grab the home page', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});