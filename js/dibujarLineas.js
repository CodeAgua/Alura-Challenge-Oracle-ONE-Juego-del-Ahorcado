import { ahorcado, palabraSecreta, letras } from "./index.js";

export let errores = 8;
export let palabraCorrecta = "";

export function dibujarLineas() {
  ahorcado.lineWidth = 6;
  ahorcado.lineCap = "round";
  ahorcado.lineJoin = "round";
  var gradienteLinea = ahorcado.createLinearGradient(0,0,800,0);
  gradienteLinea.addColorStop(0, "red");
  gradienteLinea.addColorStop(0.5, "magenta");
  gradienteLinea.addColorStop(1, "orange");
  ahorcado.strokeStyle = gradienteLinea;
  ahorcado.beginPath();

  var ancho = 600 / palabraSecreta.length;
  for (let i = 0; i < palabraSecreta.length; i++) {
    ahorcado.moveTo(500 + ancho * i, 640);
    ahorcado.lineTo(550 + ancho * i, 640);
  }
  ahorcado.stroke();
  ahorcado.closePath();
}

export function dibujarLetrasCorrectas(index) {
  ahorcado.font = "300 52px 'Roboto', sans-serif";
  ahorcado.lineWidth = 8;
  ahorcado.lineCap = "round";
  ahorcado.lineJoin = "round";
  var gradienteCorrectas = ahorcado.createLinearGradient(0,0,800,0);
  gradienteCorrectas.addColorStop(0, "#00CC0E");
  gradienteCorrectas.addColorStop(0.5, "#40D54A");
  gradienteCorrectas.addColorStop(1, "#00990A");
  ahorcado.fillStyle = gradienteCorrectas;

  var ancho = 600 / palabraSecreta.length;
  ahorcado.fillText(palabraSecreta[index], 505 + ancho * index, 620);
}

export function dibujarLetrasIncorrectas(letra, errorsLeft) {
  ahorcado.font = "300 40px 'Roboto', sans-serif";
  ahorcado.lineWidth = 7;
  ahorcado.lineCap = "round";
  ahorcado.lineJoin = "round";
  var gradienteIncorrectas = ahorcado.createLinearGradient(0,0,800,0);
  gradienteIncorrectas.addColorStop(0, "#CC0300");
  gradienteIncorrectas.addColorStop(0.5, "#D54240");
  gradienteIncorrectas.addColorStop(1, "#990300");
  ahorcado.fillStyle = gradienteIncorrectas;

  ahorcado.fillText(letra, 535 + 40 * (10 - errorsLeft), 710, 40);
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
