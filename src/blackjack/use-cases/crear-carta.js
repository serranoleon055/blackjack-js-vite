
/**
 * Esta funcion crea la carta en HTML
 * @param {String} carta 
 * @param {Number} turno 
 */
export const crearCarta = (carta, turno, divCartasContainer)=>{
    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src = `blackjack-js-vite/public/cartas/${carta}.png`
    divCartasContainer[turno].append(imgCarta);
}
