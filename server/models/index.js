import mongoose from 'mongoose';
import ExampleSchema from './examples.schema';

const metaSchemas = [
  ExampleSchema,
];

const models = {};

export const loadModels = () => {
  metaSchemas.forEach(({ name, schema }) => {
    models[name] = mongoose.model(name, new mongoose.Schema(schema));
  });
};

export default models;
