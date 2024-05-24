module.exports = {


  friendlyName: 'tratar texto caracter numero',


  description: '',


  inputs: {
    texto: {
      type: 'string',
      required: true,
      description:'Texto a ser tratado',
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    const textoTratado = inputs.texto.replace(/[\d]/g, '');
    return exits.success(textoTratado);
  }


};

