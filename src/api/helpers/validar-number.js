module.exports = {


  friendlyName: 'validar number',


  description: '',


  inputs: {
    tipoDado: {
      type: 'number',
      required: true
    }

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    if(inputs.tipoDado === 'number'){
      return exits.success(inputs.tipoDado);
    }
  }


};

