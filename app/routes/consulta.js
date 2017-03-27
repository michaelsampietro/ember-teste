import Ember from 'ember';

export default Ember.Route.extend({
  title: 'Consulta',

  renderTemplate() {
    this.render ('consulta', {
      into: 'application',
      outlet: 'outletConsulta'
    })
  }
});
