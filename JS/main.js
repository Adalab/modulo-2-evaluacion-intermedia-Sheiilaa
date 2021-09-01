'use strict';
// Primero llamamos a las variables con las que luego trabajaremos.
const numberElement = document.querySelector('.js_number');
const buttonElement = document.querySelector('.js_button');
const textElement = document.querySelector('.js_text');
const counterElement = document.querySelector('.js_counter');
const getRandomNumber = Math.ceil(Math.random() * 100); //Aqui decidimos hacer una constante de la función para sacar el número aleatorio, y que no se cambie a no ser que la página se refresque 
console.log(`El número aleatorio es ${getRandomNumber}`);

//Funciones: 

//Primero haremos la funcion para el contador.
function startCounter() {
    counterElement.innerHTML = `${parseInt(counterElement.innerHTML) + 1}`;
}
//Ahora haremos la función de la pista 
function giveClue() {
    const numberValue = parseInt(numberElement.value); //Esto lo hacemos para poder convertir el string a un número entero
    // Esto no es necesario: console.log(numberValue);
    if (numberValue > 100 || numberValue < 0 || numberValue === isNaN) {
        textElement.innerHTML = 'El número debe estar entre 1 y 100'
    } else if (isNaN(parseInt(numberValue))) {
        textElement.innerHTML = ' Debes escribir un número'

    }
    else if (numberValue < getRandomNumber) {
        textElement.innerHTML = ' Demasiado bajo'
    } else if (numberValue > getRandomNumber) {
        textElement.innerHTML = 'Demasiado alto'
    } else if (numberValue === getRandomNumber) {
        textElement.innerHTML = '¡¡¡Has ganado campeona!!'
    }

}

//Por último unimos las funciones en otra, en la cual estará el evento
function handleTheButton() {
    startCounter()
    giveClue()
}
// El evento: 
buttonElement.addEventListener('click', handleTheButton);
