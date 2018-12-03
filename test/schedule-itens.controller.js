import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('ScheduleItens', () => {
  it('should get all schedule itens', () =>
    Server.then(s =>
      request(s)
        .get('/api/v1/scheduling/schedule-itens')
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an.an('array')
            .of.length(2);
        })));

  it('should add a new schedule item', () =>
    Server.then(s =>
      request(s)
        .post('/api/v1/scheduling/schedule-itens')
        .send({ name: 'test' })
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an.an('object')
            .that.has.property('name')
            .equal('test');
        })));

  it('should get an schedule item by id', () =>
    Server.then(s =>
      request(s)
        .get('/api/v1/scheduling/schedule-itens/2')
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an.an('object')
            .that.has.property('name')
            .equal('test');
        })));
});
