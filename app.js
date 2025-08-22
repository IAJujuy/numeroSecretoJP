
// Declaro variables globales
let numeroMaximo = 100;
let numeroSecreto;
let intentos = 0;
let listaNumerosSorteados = [];

// Función genérica para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Evento para el botón de verificar intento
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    // El usuario acertó
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
    if (intentos >= 5) {
        asignarTextoElemento('p', `Lo siento, has agotado tus ${intentos} intentos. El número era ${numeroSecreto}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limpiarCaja();
        return;
    }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros posibles, reiniciar el juego
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Todos los números han sido sorteados');
        document.querySelector('#verificar').setAttribute('disabled','true');
        return;
    }

    // si el numero generado esta incluido en la lista de numeros sorteados
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        //generar otro numero
        return generarNumeroSecreto();
    } else {
        //si no esta incluido, agregarlo a la lista y retornarlo
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo} e intenta adivinar el numero secreto.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();