import models from '../models';
import logger from '../config/logger';

import scheduleItensRouter from '../api/schedule-itens/router';
import ScheduleItensController from '../api/schedule-itens/schedule-itens.controller';
import ScheduleItensService from '../api/schedule-itens/schedule-itens.service';
import ScheduleItensRepository from '../repository/schedule-itens.repo';

const scheduleItemGenerator = {
  generate: app => {
    const repo = new ScheduleItensRepository(models.ScheduleItem);
    const service = new ScheduleItensService(repo, logger);
    const controller = new ScheduleItensController(service);

    app.use('/api/v1/scheduling/schedule-itens', scheduleItensRouter(controller));
  },
};

const routers = [
  scheduleItemGenerator,
];

export default routers;
