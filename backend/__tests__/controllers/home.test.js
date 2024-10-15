const request = require('supertest');
const app = require('../../server');
const { it } = require('node:test');

it('should get dicho id', async () => {
    beforeAll(done => {
        done()
      })
      
      afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        mongoose.connection.close()
        done()
      })

    const res = await request(app)
        .get('/surprise-me')
        .send();

    expect(res.statusCode.toEqual(200));

});