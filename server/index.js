import './config/env';
import db from './config/db';

import Server from './config/server';
import routes from './routes';

import swaggerify from './config/swagger';
import logger from './config/logger';

export default db
  .then(() =>
    new Server(swaggerify, logger)
      .router(routes)
      .listen(process.env.PORT))
  .catch(err =>
    console.error(`connection error: ${err}`)); // eslint-disable-line no-console
