import amqp from 'amqplib';

let _connection = null;

export const openConnection = async () => {
  if (!_connection) {
    _connection = await amqp.connect(`amqp://${process.env.AMQP_URL}`);
  }

  return _connection;
};

export const createExchange = async exchange => {
  if (!_connection) {
    await openConnection();
  }

  const channel = await _connection.createChannel();
  await channel.assertExchange(exchange, 'topic');

  return channel;
};

export const closeConnection = () =>
  new Promise(resolve => {
    setTimeout(() => {
      _connection.close();
      _connection = null;
      resolve();
    }, 2000);
  });
