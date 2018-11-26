class ExamplesRepository {
  constructor(model) {
    this._model = model;
  }

  all() {
    return this._model.find();
  }

  byId(id) {
    return this._model.findOne({ id });
  }

  insert(name) {
    const ExampleModel = this._model;
    const record = new ExampleModel({
      name,
    });

    return record.save();
  }

  update(id, name) {
    const ExampleModel = this._model;
    const record = new ExampleModel({
      _id: id,
      name,
    });

    return record.save();
  }
}

export default new ExamplesRepository();
