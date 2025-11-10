import { valorCarta } from "./valor-carta";

/**
 * Acumula los puntos del jugador
 * @param {String} carta Carta
 * @param {Number} turno Posicion en el arreglo de jugadores
 * @param {Array<Number>} puntosJugadores Array que tiene los puntos de todos los jugadores
 * @param {HTMLElement} puntosHTML Objeto html small
 * @returns 
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML)=>{
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerHTML = puntosJugadores[turno];
    return puntosJugadores[turno];
}