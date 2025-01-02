import _ from "underscore";


/**
 * esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta ejemplo: ['C','D','H','S']
 * @param {Array<String>} TiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, TiposEspeciales) => {
    //estos if son mas que nada validaciones para los tipos de datos
    // como js es debilmente tipado, puede aceptar los parametros como any
    // cosa distinta como ts o java que debes especificar si es int o string
    
    if (!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('TiposDeCarta es obligatorio');
    if (!TiposEspeciales || TiposEspeciales.length === 0) 
        throw new Error('TiposEspeciales es obligatorio');
    
    
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }
 
    for( let tipo of tiposDeCarta ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
 }