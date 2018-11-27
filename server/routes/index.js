import routers from './routers';

export default function routes(app) {
  routers.forEach(generator => {
    generator.generate(app);
  });
}
