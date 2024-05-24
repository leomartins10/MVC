/**
 * AdmController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  tratarTexto: async function (req, res) {

    console.log('tratarTexto chamada');
    console.log( req.body );

    const texto =  req.body.texto;
    console.log( 'texto:', req.body.texto );
    const tipo = req.body.tipo;
    console.log( 'tipo:', req.body.tipo );

    if(tipo === 'caracterEspecial'){
      try {

        const textoTratado = await sails.helpers.tratarTextoCaracterEspecial.with({texto});

        console.log('Texto Tratado:', textoTratado);

        return res.json({original: texto, tratado: textoTratado });

      } catch (error) {
        return res.view('pages/main', console.log('erro'));
      }
    }
    //Se o tipo de trata
    if(tipo === 'caracterMinusculo'){
      try {

        const textoTratado = await sails.helpers.tratarTextoCaracterMinusculo.with({texto});

        console.log('Texto Tratado:', textoTratado);

        return res.json({original: texto, tratado: textoTratado });

      } catch (error) {
        return res.view('pages/main', console.log('erro'));
      }
    }
    //Se o tipo de tratamento for remover números
    if(tipo === 'caracterNumero'){
      try {

        const textoTratado = await sails.helpers.tratarTextoCaracterNumero.with({texto});

        console.log('Texto Tratado:', textoTratado);

        return res.json({original: texto, tratado: textoTratado });

      } catch (error) {
        return res.view('pages/main', console.log('erro'));
      }
    }
  }
};

