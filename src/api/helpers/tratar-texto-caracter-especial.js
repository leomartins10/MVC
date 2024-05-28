module.exports = {


  friendlyName: 'tratar texto caractér especial',


  description: 'Irá tratar o texto removendo caracteres especiais',


  inputs: {
    texto: {
      type: 'string',
      required: true,
      description: 'O texto a ser tratado'
    }

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    try {
      // Remover caracteres especiais
      let textoTratado = inputs.texto.replace(/[^a-zA-Z0-9]/g, '');

      // Transformar letras maiúsculas em minúsculas
      textoTratado = textoTratado.toLowerCase();

      return exits.success(textoTratado);
    } catch (error) {
      return exits.error('Erro ao sanitizar o texto: ' + error.message);
    }
  }


};

