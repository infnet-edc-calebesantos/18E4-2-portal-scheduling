import mongoose from 'mongoose';
import ScheduleItemSchema from './schedule-itens.schema';

const metaSchemas = [
  ScheduleItemSchema,
];

const models = {};

export const loadModels = () => {
  metaSchemas.forEach(({ name, schema }) => {
    models[name] = mongoose.model(name, new mongoose.Schema(schema));
  });
};

export default models;
