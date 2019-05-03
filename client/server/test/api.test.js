const request = require('supertest');

const app = require('../src/app');

describe('GET /api/v1', () => {
  it('responds with a json message', function(done) {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🌎🌍🌏'
      }, done);
  });
});

describe('GET /api/v1/messages', () => {
  it('responds with inserted message', function(done) {
    const result = {
      name: 'Orlando',
      message: 'this app is awesome sauce',
      latitude: -90,
      longitude: 180
    };
    request(app)
      .post('/api/v1/messages')
      .send(result)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, result, done)
     //  .expect(res => {
     // res._id = '5b57d127923211248855977c'
     // "date" = ''
     //  });
  });
});
