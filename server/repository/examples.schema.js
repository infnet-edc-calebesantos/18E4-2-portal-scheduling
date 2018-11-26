import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: String,
});

const Example = model('Example', schema);

export default Example;
