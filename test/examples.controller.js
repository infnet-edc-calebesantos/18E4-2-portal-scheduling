import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Examples', () => {
  it('should get all examples', () =>
    Server.then(s =>
      request(s)
        .get('/api/v1/scheduling/examples')
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an.an('array')
            .of.length(2);
        })));

  it('should add a new example', () =>
    Server.then(s =>
      request(s)
        .post('/api/v1/scheduling/examples')
        .send({ name: 'test' })
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an.an('object')
            .that.has.property('name')
            .equal('test');
        })));

  it('should get an example by id', () =>
    Server.then(s =>
      request(s)
        .get('/api/v1/scheduling/examples/2')
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an.an('object')
            .that.has.property('name')
            .equal('test');
        })));
});
