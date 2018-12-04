class ScheduleItensRepository {
  constructor(model) {
    this._model = model;
  }

  all() {
    return this._model.find();
  }

  byId(id) {
    return this._model.findOne({ _id: id });
  }

  insert(item) {
    const ScheduleItensModel = this._model;
    const record = new ScheduleItensModel({
      title: item.title,
      date: item.date,
      subject: item.subject,
      type: item.type,
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

  delete(id) {
    return this._model.deleteOne({ _id: id });
  }
}

export default ScheduleItensRepository;
