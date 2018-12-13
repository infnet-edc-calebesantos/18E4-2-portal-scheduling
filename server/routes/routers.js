import models from '../models';
import logger from '../config/logger';
import * as amqp from '../api/amqp';

import scheduleItensRouter from '../api/schedule-itens/router';
import ScheduleItensController from '../api/schedule-itens/schedule-itens.controller';
import ScheduleItensService from '../api/schedule-itens/schedule-itens.service';
import ScheduleItensRepository from '../repository/schedule-itens.repo';

const generateScheduleItemRoute = app => {
  const repo = new ScheduleItensRepository(models.ScheduleItem);
  const service = new ScheduleItensService(repo, logger);
  const controller = new ScheduleItensController(service, amqp);

  scheduleItensRouter(app, controller);
};

const routers = [
  generateScheduleItemRoute,
];

export default routers;
