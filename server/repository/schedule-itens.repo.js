class ScheduleItensRepository {
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
    const ScheduleItensModel = this._model;
    const record = new ScheduleItensModel({
      name,
    });

    return record.save();
  }

  update(id, name) {
    const ScheduleItensModel = this._model;
    const record = new ScheduleItensModel({
      _id: id,
      name,
    });

    return record.save();
  }
}

export default ScheduleItensRepository;
