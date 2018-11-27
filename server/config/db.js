import mongoose from 'mongoose';
import { loadModels } from '../models';

export default new Promise((resolve, reject) => {
  mongoose.connect('mongodb://localhost:27017/scheduling');

  mongoose.connection.on('error', reject);
  mongoose.connection.once('open', () => {
    loadModels();
    resolve();
  });
});
