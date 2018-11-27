class ExamplesService {
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

  create(name) {
    return this._repo.insert(name);
  }
}

export default ExamplesService;
