import * as express from 'express';

export default controller =>
  express
    .Router()
    .post('/', (req, res) => controller.create(req, res))
    .get('/', (req, res) => controller.all(req, res))
    .get('/:id', (req, res) => controller.byId(req, res));
