class ScheduleItensRepositoryMock {
  constructor() {
    this._scheduleItens = [{
      id: '3',
      title: 'Teste de Performance 3 - TP3',
      date: '2018-12-03 23:55',
      subject: 'Desenvolvimento de Software Ágil e Escalável com Microsserviços',
      type: 'PerformanceTest',
    }, {
      id: '4',
      title: 'Christmas Holiday',
      date: '2018-12-25 00:05',
      subject: null,
      type: 'Holiday',
    }, {
      id: '5',
      title: 'O QUE FAZ UM PROFISSIONAL DE SISTEMAS DE INFORMAÇÃO?',
      date: '2018-11-26 19:00',
      subject: null,
      type: 'Talk',
    }];
  }

  all() {
    return Promise.resolve(this._scheduleItens);
  }

  byId(id) {
    return Promise.resolve(this._scheduleItens.find(item => item.id === id));
  }

  insert(item) {
    const addedItem = { id: '5', ...item };
    this._scheduleItens.push(addedItem);

    return Promise.resolve(addedItem);
  }

  delete(id) {
    return Promise.resolve(this._scheduleItens.find(item => item.id === id));
  }
}

export default ScheduleItensRepositoryMock;
