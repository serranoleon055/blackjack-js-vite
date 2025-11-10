import { tomarCarta } from "./tomar-carta";
import {determinarGanador} from './determinar-ganador';
import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";


export const turnoComputadora = ( deck, puntosJug, puntosJugadores, puntosHTML, divCartasContainer )=>{
    let puntosComputadora = 0;
    do{
        const carta = tomarCarta(deck);
        puntosComputadora = acumularPuntos(carta, (puntosJugadores.length - 1), puntosJugadores, puntosHTML);
        crearCarta(carta, (puntosJugadores.length - 1), divCartasContainer);
    }while((puntosComputadora < puntosJug) && (puntosJug <=21));
    determinarGanador(puntosJugadores);
}