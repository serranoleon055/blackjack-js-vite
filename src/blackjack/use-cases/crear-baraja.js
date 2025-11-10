import _ from 'underscore';

/**
 * Esta funcion crea una baraja
 * @param {Array<String>} palosCartas Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} especialesCartas Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna una nueva baraja
 */
export const crearBaraja = (palosCartas, especialesCartas)=>{

    if(!palosCartas || palosCartas.length === 0)
        throw new Error('palosCartas es obligatorio como arreglo de strings');
    if(!especialesCartas || especialesCartas.length === 0)
        throw new Error('especialesCartas es obligatorio como arreglo de strings');

    let deck = [];
    for(let i=2; i<=10; i++){
        for(let palo of palosCartas){
            deck.push(i + palo);
        }
    }
    for(let palo of palosCartas){
        for(let esp of especialesCartas){
            deck.push(esp + palo);
        }
    }
    deck = _.shuffle(deck);
    console.log(deck)
    return deck;
}


// export default crearBaraja;