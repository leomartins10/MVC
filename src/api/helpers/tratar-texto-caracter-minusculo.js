const { tratarTexto } = require('../controllers/AdmController');

module.exports = {


  friendlyName: 'tratar texto caracter minusculo',


  description: '',


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

    textoTratado = inputs.texto.toLowerCase();

    return exits.success(textoTratado);
  }


};

