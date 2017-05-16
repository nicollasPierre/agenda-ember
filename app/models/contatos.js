import DS from 'ember-data';

export default DS.Model.extend({
    nome: DS.attr(),
    email: DS.attr(),
    dtnasc: DS.attr(),
    tipoTelefone: DS.attr(),
    tipoPessoa: DS.attr(),
    foto: DS.attr(),
    favorito: DS.attr(),
    celular: DS.attr()
});
