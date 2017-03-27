import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('conteudo-consulta', 'Integration | Component | conteudo consulta', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{conteudo-consulta}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#conteudo-consulta}}
      template block text
    {{/conteudo-consulta}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
