import Ember from 'ember';

export default Ember.Component.extend({
  renderTemplate() {
    this.render('conteudo-consulta', {
      into: 'application',
      outlet: 'outletConteudoConsulta'
    });
  },

  model: function() {
    return [title: "Testando Titulo"];
  }
});
