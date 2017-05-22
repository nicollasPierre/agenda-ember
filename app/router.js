import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tabela-contatos', function() {
    this.route('detalhes', {path: '/:contatos_id' });
  });

  this.route('contatos', function() {
    this.route('detalhes', {path: '/:contatos_id' });
  });
  this.route('cadastro-contatos');
});

export default Router;
