import routers from './routers';

function routes(app) {
  routers.forEach(generate => generate(app));
}

export default routes;
