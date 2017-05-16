export default function() {

  this.namespace = '/api';

let contact = [{
        id: 1,
        type: 'contatos',
        attributes: {
          nome: 'nicollas',
          email: 'nicollaspierre@gmail.com',
          dtNasc: '22/04/1997',
          tipoTelefone: 'celular',
          tipoPessoa: 'fisica',
          foto: 'https://thumbs.dreamstime.com/z/nenhuma-c%C3%A2mera-proibiu-proibido-proibido-5230695.jpg',
          favorito: true,
          celular: '9622127(3/6)'
        }
    },
    {
      id: 2,
      type: 'contatos',
      attributes: {
        nome: 'paulo',
        email: 'paulo.f.piva@gmail.com',
        dtNasc: '22/08/1997',
        tipoTelefone: 'celular',
        tipoPessoa: 'fisica',
        foto: 'https://thumbs.dreamstime.com/z/nenhuma-c%C3%A2mera-proibiu-proibido-proibido-5230695.jpg',
        favorito: false,
        celular: '91919494'
      }
    },
    {
      id: 3,
      type: 'contatos',
      attributes: {
        nome: 'daniel',
        email: 'danielmartini@gmail.com',
        dtNasc: '22/12/1997',
        tipoTelefone: 'celular',
        tipoPessoa: 'fisica',
        foto: 'https://thumbs.dreamstime.com/z/nenhuma-c%C3%A2mera-proibiu-proibido-proibido-5230695.jpg',
        favorito: false,
        celular: '96962424'
      }
  }];

  this.get('/contatos', function() {
    return {
      data: contact
    };
  });

  this.get('/contatos/:id', function (db, request) {
    return { data: contact.find((contacts) => request.params.id === (contacts.id+"")) };
  });
}
