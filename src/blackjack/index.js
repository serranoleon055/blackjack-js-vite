import _ from 'underscore';
import { crearBaraja, tomarCarta, crearCarta, acumularPuntos, turnoComputadora } from './use-cases/index';


    let deck = [],
        palos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    //DEFINIENDO OBJETOS HTML
    const btnPedir = document.querySelector('#btn-pedir'),
        btnDetener = document.querySelector('#btn-detener'),
        btnNuevo = document.querySelector('#btn-nuevo'),
        puntosHTML = document.querySelectorAll('small'),
        divCartasContainer = document.querySelectorAll('.cartas-container');

    const inicializarJuego = ( numJugadores = 2)=>{
        deck = [];
        deck = crearBaraja(palos, especiales);
        puntosJugadores = [];
        for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }

        divCartasContainer.forEach(elem => elem.innerHTML = '');
        puntosHTML.forEach(elem => elem.innerText = 0);

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }


    // EVENTOS

    btnPedir.addEventListener("click", ()=>{
        const carta = tomarCarta(deck);
        crearCarta(carta, 0, divCartasContainer);
        const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

        if(puntosJugador > 21){
            console.warn('Perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(deck, puntosJugador, puntosJugadores, puntosHTML, divCartasContainer);
        }else if(puntosJugador === 21){
            console.log('21, GENIAL!')
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(deck, puntosJugador, puntosJugadores, puntosHTML, divCartasContainer);
        }
        
    })

    btnDetener.addEventListener("click", ()=>{
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(deck, puntosJugadores[0], puntosJugadores, puntosHTML, divCartasContainer);
    })

    btnNuevo.addEventListener('click', ()=>{
        inicializarJuego();
    })


