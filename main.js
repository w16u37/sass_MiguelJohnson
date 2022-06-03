// Ejemplo 1
// Pedir un número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada repetición
// let dato = parseInt(prompt("Ingresa un número"))
// for (let i = 0; i < 13; i = i + 2) {
//     let resultado = dato + i
//     console.log(dato + "+" + i + "=" + resultado);
// }

//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingrese "ESC"
// let nombre = prompt("Ingresa tu nombre")
// let curso = prompt("Selecciona tu curso de interes \n 1-Desarrollo Web \n 2-Javascript")
// while (nombre && curso != "ESC") {
//     switch (curso) {
//         case "1":
//             console.log("Hola "+ nombre+" Bienvenido al curso de Desarrollo web");
//             break;
//         case "2":
//             console.log("Hola "+ nombre+" Bienvenido al curso de Javascript");
//             break;    
//         default:
//             console.log("Hola, ¿eres nuevo?");
//             break;
//     }
//     nombre = prompt("Ingresa tu nombre");
//     curso = prompt("Selecciona tu curso de interes \n 1-Desarrollo Web \n 2-Javascript");
//     if (nombre || curso == "ESC") {
//         console.log("Gracias, que tenga buen día");
//     }
// }

// Pedir un número por prompt, repetir la salida del mensaje "hola" la cantidad de veces ingresada
let dato = parseInt(prompt("Ingresa un número"))
for (let i = dato; i <= dato; i++) {
    if (i <= dato) {
        console.log("hola");
    
    }
    else {
        break;
    }    
}

