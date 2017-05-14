import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [{
          type: 'contato',
          nome: 'nicollas',
          email: 'nicollaspierre@gmail.com',
          dt_nasc: '22/04/1997',
          tipo_telefone: 'celular',
          tipo_pessoa: 'fisica',
          foto: 'https://thumbs.dreamstime.com/z/nenhuma-c%C3%A2mera-proibiu-proibido-proibido-5230695.jpg',
          favorito: true,
          celular: '9622127(3/6)'
      },
      {
        type: 'contato',
        nome: 'paulo',
        email: 'paulo.f.piva@gmail.com',
        dt_nasc: '22/08/1997',
        tipo_telefone: 'celular',
        tipo_pessoa: 'fisica',
        foto: 'https://thumbs.dreamstime.com/z/nenhuma-c%C3%A2mera-proibiu-proibido-proibido-5230695.jpg',
        favorito: false,
        celular: '91919494'
      },
      {
        type: 'contato',
        nome: 'daniel',
        email: 'danielmartini@gmail.com',
        dt_nasc: '22/12/1997',
        tipo_telefone: 'celular',
        tipo_pessoa: 'fisica',
        foto: 'https://thumbs.dreamstime.com/z/nenhuma-c%C3%A2mera-proibiu-proibido-proibido-5230695.jpg',
        favorito: false,
        celular: '96962424'
      }]
  }
});
