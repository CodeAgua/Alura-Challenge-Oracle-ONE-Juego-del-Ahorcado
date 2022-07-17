import { dibujarLineas } from "./dibujarLineas.js";

export const tablero = document.querySelector("canvas").getContext("2d");

var palabras = ["CASA", "HOGAR", "CONTROL", "VISOR", "ZORRO", "ARROZ", "AZALEA", "PERRERA", 
"FELINO", "CANINO", "COLLAR", "LAMPARA", "CABALLO", "TORO", 
"MITOSIS", "PARASITO", "PROGRAMA", "DRAGON", "BEBIDA", "COMIDA", "PALABRA", "AHORCADO"];

var letras = [];

var palabraCorrecta = "";

var errores = 8;

export function contarErrores() {
    for (let i = 0; i < errores; i++) {
        console.log(errores);
    };
};

export function elegirPalabra() {
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    return palabra;
}

export const palabraSecreta = elegirPalabra();

console.log(palabraSecreta)