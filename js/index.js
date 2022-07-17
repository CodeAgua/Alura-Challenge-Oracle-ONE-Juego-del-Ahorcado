import { dibujarLineas, dibujarLetrasCorrectas, errores, palabraCorrecta } from "./dibujarLineas.js";

export const tablero = document.querySelector("canvas").getContext("2d");

export var palabras = ["CASA", "HOGAR", "CONTROL", "VISOR", "ZORRO", "ARROZ", "AZALEA", "PERRERA", 
"FELINO", "CANINO", "COLLAR", "LAMPARA", "CABALLO", "TORO", "ELEMENTO", "CAJA", "ALURA",
"MITOSIS", "PARASITO", "PROGRAMA", "DRAGON", "BEBIDA", "COMIDA", "PALABRA", "AHORCADO"];

export var letras = [];

export function elegirPalabra() {
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    return palabra;
}

export let palabraSecreta = elegirPalabra();

console.log(palabraSecreta);

dibujarLineas();