import * as express from 'express';

const generateRoutes = controller =>
  express
    .Router()
    .post('/', (req, res) => controller.create(req, res))
    .get('/', (req, res) => controller.all(req, res))
    .get('/:id', (req, res) => controller.byId(req, res))
    .delete('/:id', (req, res) => controller.delete(req, res));

const router = (app, controller) =>
  app.use('/api/v1/scheduling/schedule-itens', generateRoutes(controller));

export default router;
