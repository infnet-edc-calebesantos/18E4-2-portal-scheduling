export const loggerMock = {
  info(message) {
    console.info(message); // eslint-disable-line
  },
};

export const swaggerifyMock = (app, routes) => {
  routes(app);
};
