import { tablero } from "./index.js";
import { palabraSecreta } from "./index.js";

export function dibujarLineas() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#b746f0";
    tablero.beginPath();

    var ancho = 600 / palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(500 + (ancho * i), 640);
        tablero.lineTo(550 + (ancho * i), 640);
    }
    tablero.stroke();
    tablero.closePath();
}
