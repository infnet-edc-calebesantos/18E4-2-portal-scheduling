import mongoose from 'mongoose';
import { loadModels } from '../models';

export default new Promise((resolve, reject) => {
  mongoose.connect(process.env.MONGO_URL);

  mongoose.connection.on('error', reject);
  mongoose.connection.once('open', () => {
    loadModels();
    resolve();
  });
});
