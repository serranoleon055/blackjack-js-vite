/**
 * Esta funcion transforma la carta en los puntos
 * @param {String} carta Ejemplo: '2D', '5H'
 * @returns {Number} retorna el valor de la carta
 */
export const valorCarta = ( carta )=>{
    let valor = carta.substring(0, carta.length - 1);//MUESTRA TODO MENOS EL ULTIMO ELEMENTO DE CARTA(PALO)
    return (isNaN(valor)) ? 
        (valor === 'A') ? 11 :10
        : valor*1;
}