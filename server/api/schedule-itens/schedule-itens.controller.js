import sendMessage from '../amqp/send';

class ScheduleItensController {
  constructor(service) {
    this._service = service;
  }

  all(req, res) {
    this._service.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    this._service
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    this._service
      .create(req.body)
      .then(r => {
        res
          .status(201)
          .location(`/api/v1/schedule-itens/${r.id}`)
          .json(r);

        sendMessage(JSON.stringify(r));
      });
  }

  delete(req, res) {
    this._service
      .delete(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }
}

export default ScheduleItensController;
