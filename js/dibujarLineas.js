import { tablero, palabraSecreta, letras } from "./index.js";

export let errores = 8;
export let palabraCorrecta = "";

export function dibujarLineas() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.strokeStyle = "#b746f0";
  tablero.beginPath();

  var ancho = 600 / palabraSecreta.length;
  for (let i = 0; i < palabraSecreta.length; i++) {
    tablero.moveTo(500 + ancho * i, 640);
    tablero.lineTo(550 + ancho * i, 640);
  }
  tablero.stroke();
  tablero.closePath();
}

export function dibujarLetrasCorrectas(index) {
  tablero.font = "bold 52px 'Inter'";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#b746f0";

  var ancho = 600 / palabraSecreta.length;
  tablero.fillText(palabraSecreta[index], 505 + ancho * index, 620);
}

export function dibujarLetrasIncorrectas(letra, errorsLeft) {
  tablero.font = "bold 40px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#b746f0";

  tablero.fillText(letra, 535 + 40 * (10 - errorsLeft), 710, 40);
}

export function verificarLetraApretada(key) {
  if (letras.lenght < 1 || letras.indexOf(key) < 0) {
    letras.push(key);
    return false;
  } else {
    letras.push(key);
    return true;
  }
}

export function agregarLetraCorrecta(i) {
  palabraCorrecta += palabraSecreta[i].toUpperCase();
}

export function agregarLetraIncorrecta(letra) {
  if (palabraSecreta.indexOf(letra) <= 0) {
    errores -= 1;
  }
}

export const grueso = document.onkeydown = (e) => {
  let letra = e.key.toUpperCase();
  if (!verificarLetraApretada(e.key)) {
    if (palabraSecreta.includes(letra)) {
      console.log(letra);
      agregarLetraCorrecta(palabraSecreta.indexOf(letra));
      for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
          dibujarLetrasCorrectas(i);
        }
      }
    }
    else{
        if(!verificarLetraApretada(e.key)) return
        agregarLetraIncorrecta(letra)
        dibujarLetrasIncorrectas(letra, errores)
    }
  }
};
