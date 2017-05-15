export default function() {

  this.namespace = '/api';

  this.get('/contatos', function() {
    return {
      data: [{
              type: 'contatos',
              id: 'nicollas1',
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
            type: 'contatos',
            id: 'paulo2',
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
            type: 'contatos',
            id: 'daniel3',
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
        }]
    };
  });
}
