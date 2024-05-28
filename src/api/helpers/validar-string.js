module.exports = {


  friendlyName: 'validar string',


  description: '',


  inputs: {
    tipoDado: {
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    if(inputs.tipoDado === 'string'){
      return exits.success(inputs.tipoDado);
    }
  }


};

