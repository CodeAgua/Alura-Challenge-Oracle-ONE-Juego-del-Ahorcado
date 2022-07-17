var palabras = ["CASA", "HOGAR", "CONTROL", "VISOR", "ZORRO", "ARROZ", "AZALEA", "PERRERA", 
"FELINO", "CANINO", "COLLAR", "LAMPARA", "CABALLO", "TORO", 
"MITOSIS", "PARASITO", "PROGRAMA", "DRAGON", "BEBIDA", "COMIDA", "PALABRA", "AHORCADO"]

var tablero = document.querySelector("canvas").getContext("2d");

var letras = [];
var palabraCorrecta = "";
var errores = 2;

function elegirPalabra() {
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    var palabraSecreta = palabra;
    console.log(palabraSecreta);
    return palabraSecreta;
}
elegirPalabra()

function dibujarLineas() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#b746f0";
    tablero.beginPath()

    var ancho=600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(500+(ancho*i), 640)
        tablero.lineTo(550+(ancho*i), 640)
    }
}
dibujarLineas();