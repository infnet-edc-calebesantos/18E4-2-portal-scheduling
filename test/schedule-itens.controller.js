import chai from 'chai';
import request from 'supertest';
import Server from '../server/config/server';
import ScheduleItensService from '../server/api/schedule-itens/schedule-itens.service';
import ScheduleItensController from '../server/api/schedule-itens/schedule-itens.controller';
import scheduleItensRouter from '../server/api/schedule-itens/router';
import ScheduleItensRepositoryMock from '../mock/schedule-itens.repository.mock';
import { loggerMock, swaggerifyMock } from '../mock/general.mocks';

const expect = chai.expect;

describe('ScheduleItens', () => {
  let app = null;
  const routes = [
    serv => {
      const repo = new ScheduleItensRepositoryMock();
      const service = new ScheduleItensService(repo, loggerMock);
      const controller = new ScheduleItensController(service);

      scheduleItensRouter(serv, controller);
    },
  ];

  before(() => {
    app = new Server(swaggerifyMock, loggerMock)
      .router(serv => routes.forEach(generate => generate(serv)))
      .listen(3000);
  });

  it('should get all schedule itens', () =>
    request(app)
      .get('/api/v1/scheduling/schedule-itens')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          .of.length(3);
      }));

  it('should get an schedule item by id', () =>
    request(app)
      .get('/api/v1/scheduling/schedule-itens/3')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('title')
          .equal('Teste de Performance 3 - TP3');
      }));

  it('should add a new schedule item', () =>
    request(app)
      .post('/api/v1/scheduling/schedule-itens')
      .send({
        title: 'O QUE FAZ UM PROFISSIONAL DE SISTEMAS DE INFORMAÇÃO?',
        date: '2018-11-26 19:00',
        subject: null,
        type: 'Talk',
      })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('title')
          .equal('O QUE FAZ UM PROFISSIONAL DE SISTEMAS DE INFORMAÇÃO?');
      }));

  it('should get an schedule item that was deleted by id', () =>
    request(app)
      .delete('/api/v1/scheduling/schedule-itens/3')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('title')
          .equal('Teste de Performance 3 - TP3');
      }));
});
