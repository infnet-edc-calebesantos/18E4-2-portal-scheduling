import { createExchange, closeConnection } from './connection';
import logger from '../../config/logger';

const sendMessage = async message => {
  try {
    const { EXCHANGE_MS_AT_AGENDAMENTOS } = process.env;
    const channel = await createExchange(EXCHANGE_MS_AT_AGENDAMENTOS);

    channel.publish(EXCHANGE_MS_AT_AGENDAMENTOS, '', Buffer.from(message));
  } catch (e) {
    logger.error(e);
  }

  closeConnection();
};

export default sendMessage;
