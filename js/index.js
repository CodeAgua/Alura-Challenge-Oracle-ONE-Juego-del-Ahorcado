var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 1200, 800);

   function diseñarCirculo(x, y, radio, color) {

        pincel.fillStyle = color;
        pincel.beginPath();
        pincel.arc(x, y, radio, 0, 2*Math.PI);
        pincel.fill();
    }
   
   function limpiarPantalla() {
      pincel.clearRect(0,0, 1200, 800);
   }

var x=0
var y=0
var sentido1 = 1
var sentido2 = 1
   function actualizarPantalla() {
      limpiarPantalla();
      
      if (x > 1200 || y > 800) {
         sentido1 = -1;
         sentido2 = -1;
      } else if (x < 0 || y < 0) {
         sentido1 = 1;
         sentido2 = 1;
      }

      diseñarCirculo(x,y,50,"purple");
      x+= sentido1
      y+= sentido2
   }

   setInterval(actualizarPantalla,0.5);



 /*pincel.fillStyle='black';
    pincel.beginPath();
    pincel.moveTo(50, 50);
    pincel.lineTo(50, 800);
    pincel.lineTo(800, 800);
    pincel.fill();

    pincel.fillStyle='white';
    pincel.beginPath();
    pincel.moveTo(100, 175);
    pincel.lineTo(100, 350);
    pincel.lineTo(275, 350);
    pincel.fill();

    pincel.beginPath();
    pincel.moveTo(50, 50);
    pincel.lineTo(50, 800);  
*/

function dibujarCuadrado(x, y, color, altura){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.fillStyle = color;
    pincel.fillRect(x,y,50,altura);
    pincel.strokeStyle = "black";
    pincel.strokeRect(x,y,50,altura);
 }

/* var x = 0;
while (x < 120) {
 dibujarCuadrado(x,0,"red",50);
 dibujarCuadrado(x,50,"yellow",50);
    dibujarCuadrado(x,100,"green",50);
    x+= 50
}
*/

/*for (var x=0; x < 120; x+=50) {
 dibujarCuadrado(x,0,"red",50);
 dibujarCuadrado(x,50,"yellow",50);
 dibujarCuadrado(x,100,"green",50);
}
*/

  var pantalla = document.querySelector("canvas");
  var pincel = pantalla.getContext("2d");
  pincel.fillStyle = "lightgray";
  pincel.fillRect(0, 0, 120, 800);

/*    function dibujarCirculo(x, y, radio, color) {

      pincel.fillStyle = color;
      pincel.beginPath();
      pincel.arc(x, y, radio, 0, 2*3.14);
      pincel.fill();
  }

  dibujarCirculo(300,200,50,"red");
  dibujarCirculo(800,200,50,"green");
  dibujarCirculo(200,200,50,"green");
  dibujarCirculo(300,300,50,"green");
  dibujarCirculo(300,100,50,"green");
*/
  var serie2009 = [6, 47, 41, 3, 3];
  var serie2019 = [81, 9, 3, 3, 4];
  var colores = ["blue","green","yellow", "red","gray"];

function dibujarRectangulo(x, y, base, altura, color) {
      var pantalla = document.querySelector("canvas");
      var pincel = pantalla.getContext("2d");

      pincel.fillStyle=color;
      pincel.fillRect(x,y, base, altura);
      pincel.strokeStyle="black";
      pincel.strokeRect(x,y, base, altura);
  }

  function escribirTexto(x , y, texto) {
      var pantalla = document.querySelector("canvas");
      var pincel = pantalla.getContext("2d");

      pincel.font="15px Georgia";
      pincel.fillStyle="black";
      pincel.fillText(texto, x, y);    
  }

  function dibujarBarra(x,y, serie, colores, texto) {
      escribirTexto(x, y - 10, texto);
      var sumaAltura = 0; 

     for (var i = 0; i < serie.length; i++) {
      var altura = serie[i];
      dibujarRectangulo(x, y + sumaAltura, 50, altura, colores[i]);
      sumaAltura = sumaAltura + altura;
      }
  }

  dibujarBarra(50, 50, serie2009, colores, "2009");
  dibujarBarra(150, 50, serie2019, colores, "2019");



//      dibujarCuadrado(50, 50, "red",Math.round(Math.random()*50));

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");    
pincel.fillStyle = "grey";
pincel.fillRect(0,0,120,800); 

function mostrarMensaje(evento){
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop; 
    var d = new Date(); 
    var hora = checkTime(d.getHours()) + ":" + checkTime(d.getMinutes()) + ":" + checkTime(d.getSeconds());
    function checkTime(i){
        if (i<10){
            i="0" + i;
        }
        return i;
    }

    document.getElementById("demo").innerHTML = "La hora es: " + hora + " y las coordenadas son: x=" + x + ", y=" + y;
}

const colores= ["blue","red","green"];
var indiceColorActual = 0;

function crearCirculo(evento){
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop; 

    pincel.fillStyle = colores[indiceColorActual];
    pincel.beginPath();
    pincel.arc(x, y, 20, 0, 2*3.14);
    pincel.fill();
    console.log(x + "," + y);
}

function cambiarColor(evento){
    indiceColorActual++
    if (indiceColorActual >= colores.length) {
        indiceColorActual = 0;
    }

    return false;
}

pantalla.oncontextmenu = cambiarColor;
pantalla.onclick = crearCirculo;
//pantalla.onclick = mostrarMensaje;


var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");		
	pincel.fillStyle = "lightgrey";
	pincel.fillRect(0,0,1200,800); 

    var radio = 10;
    var xRandom = sortearUbicacion(1200);
    var yRandom = sortearUbicacion(800);

	function crearCircunferencia(x,y,radio,color){
		pincel.fillStyle = color;
		pincel.beginPath();
		pincel.arc(x,y,radio,0,2*Math.PI);
		pincel.fill();
	}	

	function limpiarPantalla(){

		pincel.clearRect(0,0,1200
,800);

	}

 function sortearUbicacion(maximo) {
    	return Math.floor(Math.random()*maximo);
    }

	var x = 0

	function actualizarPantalla(){

		limpiarPantalla();
		xRandom = sortearUbicacion(1200
);
        yRandom = sortearUbicacion(800);
		diseñarObjetivo(xRandom,yRandom);
		x++;
	}
    
    function diseñarObjetivo(x,y){
     crearCircunferencia(x,y,radio + 20,"red");
    crearCircunferencia(x,y,radio + 10,"white");
    crearCircunferencia(x,y,radio,"red");
    }


   function disparar(evento) {

   	var x = evento.pageX - pantalla.offsetLeft;
   	var y = evento.pagey - pantalla.offsetTop;

   	if ((x < xRandom + radio) &&
   	    (x > xRandom - radio) && 
   	    (y < yRandom + radio) && 
   	    (y > yRandom - radio)) {
   		alert("¡Tiro Certero!");
   	}      	
   }

pantalla.onclick = disparar;
setInterval(actualizarPantalla,1000);

var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");		
	pincel.fillStyle = "lightgrey";
	pincel.fillRect(0,0,1200,800); 

	var radio = 10;
	var xAleatorio;
	var yAleatorio;

	function disenharCircunferencia(x,y,radio, color){
		pincel.fillStyle = color;
		pincel.beginPath();
		pincel.arc(x,y,radio,0,2*Math.PI);
		pincel.fill();
	}	

	function limpiarPantalla(){

		pincel.clearRect(0,0,1200
,800);

	}

	var x = 0


	function disenharObjetivo(x,y){

		disenharCircunferencia(x,y,radio + 20,"red");
		disenharCircunferencia(x,y,radio + 10,"white");
		disenharCircunferencia(x,y,radio,"red");
	}

	
	function sortearPosicion(maximo){

		return Math.floor(Math.random()*maximo);

	}


	function actualizarPantalla(){

		limpiarPantalla();
		xAleatorio = sortearPosicion(1200
);
		yAleatorio = sortearPosicion(800);
		disenharObjetivo(xAleatorio,yAleatorio);
		x++;
	}
	
	setInterval(actualizarPantalla,1000);

	function disparar(evento){

		var x = evento.pageX - pantalla.offsetLeft;
		var y = evento.pageY - pantalla.offsetTop;

		if ((x < xAleatorio + radio) && 
			(x > xAleatorio - radio) &&
			(y < yAleatorio + radio) &&
			(y > yAleatorio - radio) ) {
			alert("Tiro Certero");
		}
	}

	pantalla.onclick = disparar;