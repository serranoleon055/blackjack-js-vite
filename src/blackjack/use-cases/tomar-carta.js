/**
 * Esta funcion toma una carta del deck mezclado
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} Retorna un string que seria la carta. Ejemplo: '2D', '5H'
 */
export const tomarCarta = (deck)=>{
    if(!deck || deck.length === 0){
        throw 'No hay mas cartas en la baraja';
    }
    return deck.pop();
}