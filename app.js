let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
return;
}
    
function mensajesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', 'Indica un número entre 1 y 100'); 
}
    

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
   if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero es menor');
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        } 
    } 
    if (intentos >= 5) {
        asignarTextoElemento('p', `Lo siento, has agotado tus ${intentos} intentos. El número era ${numeroSecreto}.`);
    }
    intentos++;
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
}


mensajesIniciales();