class ScheduleItensService {
  constructor(repo, logger) {
    this._repo = repo;
    this._logger = logger;
  }

  all() {
    this._logger.info(`${this.constructor.name}.all()`);
    return this._repo.all();
  }

  byId(id) {
    this._logger.info(`${this.constructor.name}.byId(${id})`);
    return this._repo.byId(id);
  }

  create(item) {
    this._logger.info(`${this.constructor.name}.create(${JSON.stringify(item)})`);
    return this._repo.insert(item);
  }

  delete(id) {
    this._logger.info(`${this.constructor.name}.delete(${id})`);
    return this._repo.delete(id);
  }
}

export default ScheduleItensService;
