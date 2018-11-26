import examplesRouter from '../api/examples/router';

export default function routes(app) {
  app.use('/api/v1/scheduling/examples', examplesRouter);
}
