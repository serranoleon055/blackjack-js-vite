/**
 * Determina el ganador
 * @param {Array<Number>} puntosJugadores Es un array con los puntos de los jugadores, el ultimo es la pc
 */
export const determinarGanador  = (puntosJugadores)=>{
    const [puntosJug, puntosComputadora] = puntosJugadores;

    setTimeout(()=>{
        if(puntosJug === puntosComputadora){
            alert('Empate');
        } else if( puntosComputadora > 21){
            alert('Jugador gana');
        }else if( puntosJug > 21){
            alert('Computadora gana');
        } else{
            alert('Computadora gana');
        }
    }, 300)
}
