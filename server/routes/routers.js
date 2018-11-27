import models from '../models';
import logger from '../config/logger';

import examplesRouter from '../api/examples/router';
import ExamplesController from '../api/examples/examples.controller';
import ExamplesService from '../api/examples/examples.service';
import ExamplesRepository from '../repository/examples.repo';

const exampleGenerator = {
  generate: app => {
    const repo = new ExamplesRepository(models.Example);
    const service = new ExamplesService(repo, logger);
    const controller = new ExamplesController(service);

    app.use('/api/v1/scheduling/examples', examplesRouter(controller));
  },
};

const routers = [
  exampleGenerator,
];

export default routers;
