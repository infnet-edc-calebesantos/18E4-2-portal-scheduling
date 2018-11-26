import * as express from 'express';
import controller from './examples.controller';

export default express
  .Router()
  .post('/', controller.create)
  .get('/', controller.all)
  .get('/:id', controller.byId);
