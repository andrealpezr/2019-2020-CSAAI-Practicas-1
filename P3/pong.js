console.log("Ejecutando JS...");

var canvas = document.getElementById("canvas");
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

const ctx = canvas.getContext("2d");

//-- Obtener Sonidos
const sonido_raqueta = new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("pong-rebote.mp3");

const ESTADO = {
  INIT: 0,
  SAQUE: 1,
  JUGANDO: 2,
  GANADOR:3,
  TANTO_J1 : 0,
  TANTO_J2 : 0,
}
//-- Arrancamos desde el estado inicial
let estado = ESTADO.INIT;

function draw() {

  //---- Dibujar la Bola
  if (estado == ESTADO.SAQUE || estado == ESTADO.JUGANDO){
    console.log(estado, 'dibujo bola');
    bola.draw();
  }

  //-- Dibujar las raquetas
  raqI.draw();
  raqD.draw();

  //---- Dibujar la red
  ctx.beginPath();

  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;

  //-- Punto superior de la linea. Su coordenada x está en la mitad del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //---- Dibujar el tanteo
  ctx.font = "90px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(ESTADO.TANTO_J1, 200, 80);
  ctx.fillText(ESTADO.TANTO_J2, 340, 80);

  //-- Dibujar el texto de sacar
  if (estado == ESTADO.SAQUE) {
    console.log(estado, 'pulsa start');
    ctx.font = "40px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Pulsa Start!", 30, 350);
  }

  //-- Dibujar el texto de comenzar
  if (estado == ESTADO.INIT) {
    console.log(estado, 'pulsa nivel');
    ctx.font = "40px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Pulsa un nivel!", 30, 350);
  }

  if (estado == ESTADO.GANADOR){
    //-- Borrar la pantalla
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.font = "50px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("ENHORABUENA!!!", 100, 100);
    ctx.font = "40px Arial";
    ctx.fillText("Goles J1:", 100, 250);
    ctx.fillText("Goles J2:", 360, 250);
    ctx.fillText(ESTADO.TANTO_J1, 140, 300);
    ctx.fillText(ESTADO.TANTO_J2, 400, 300);

  }
}

function animacion()
{
  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  raqD.update();

//-- Ver si hay colisión con las paredes derecha o izquierda.
//-- Contabilozamos los tantos para conseguir un ganador.
  if (bola.x <= 0){
    bola.vx = bola.vx * -1;
    if (estado == ESTADO.JUGANDO){
      ESTADO.TANTO_J1 += 1;
      if (ESTADO.TANTO_J1 == 6){
        estado = ESTADO.GANADOR;
      }
      console.log("Tanto!!!!");
    }
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();

  }else if (bola.x >= canvas.width){
    bola.vx = bola.vx * -1;
    if (estado == ESTADO.JUGANDO){
        ESTADO.TANTO_J2 += 1;
        if (ESTADO.TANTO_J2 == 6){
          estado = ESTADO.GANADOR;
        }
        console.log("Tanto!!!!");
    }
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }

  //-- Ver si hay colisión con las paredes de arriba o abajo.
  if(bola.y <= 0 || bola.y >= canvas.height - 40){
    bola.vy = bola.vy * -1;

    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }

  //-- Ponemos los margenes de las raquetas
  if (raqI.y <= 0 || raqI.y >= (canvas.height - 80)){
    raqI.y = raqI.y * -1;
  }else if (raqD.y <= 0 || raqD.y >= (canvas.height - 80)){
    raqD.y = raqD.y * -1;
  }

  //-- Comprobar si hay colisión con las raquetas
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {
     bola.vx = bola.vx * -1;
     //-- Reproducir sonido
     sonido_raqueta.currentTime = 0;
     sonido_raqueta.play();
  }else if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
       bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)){
     bola.vx = bola.vx * -1;
     //-- Reproducir sonido
     sonido_raqueta.currentTime = 0;
     sonido_raqueta.play();
     }


  //-- Actualizar coordenada x de la bola, en funcion de su velocidad
  bola.update();

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();

}

//-- Crear la bola
const bola = new Bola(ctx);

var nivel1 = document.getElementById('nivel1');
var nivel2 = document.getElementById('nivel2');
var nivel3 = document.getElementById('nivel3');

//-- Cambiar las velocidades de la bola según el nivel del juego
  nivel1.onclick = () => {
      bola.vx_ini = 2;
      bola.vy_ini = 2;
      estado = ESTADO.SAQUE;
   }
   nivel2.onclick = () =>{
     bola.vx_ini = 3;
     bola.vy_ini = 3;
     estado = ESTADO.SAQUE;
   }
   nivel3.onclick = () =>{
     bola.vx_ini = 5;
     bola.vy_ini = 5;
     estado = ESTADO.SAQUE;
   }

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 540;
raqD.y_ini = 150;
raqD.init();


// Usamos la función setInterval() que ya conocemos para arrancar la animación
setInterval(()=>{
       animacion();
},16);


//-- Obtener el boton de saque
const start = document.getElementById("start");
//-- Obtener el boton de reset
const reset = document.getElementById("reset");

start.onclick = () => {
  //-- Llevar bola a su posicion incicial
  bola.init();
  //-- Darle velocidad
  bola.vx = bola.vx_ini;
  bola.vy = bola.vy_ini;

  ESTADO.TANTO_J1 = 0;
  ESTADO.TANTO_J2 = 0;
  estado = ESTADO.JUGANDO;
  console.log(estado,'start');
  console.log("Saque!");

}

reset.onclick = () => {
  bola.init();
  ESTADO.TANTO_J1 = 0;
  ESTADO.TANTO_J2 = 0;
  estado = ESTADO.INIT;
  console.log(estado, 'reset');
  console.log("Reset!");

}


//-- Retrollamada de las teclas OTRA FORMA
window.onkeydown = (e) => {
  if (estado == ESTADO.INIT)
    return;

  switch (e.key) {
   case "q":
      raqI.y += raqI.v_ini * -1;
      break;
   case "a":
      raqI.y += raqI.v_ini;
      break;
    case "p":
      raqD.v = raqD.v_ini * -1;
      break;
    case "l":
      raqD.v = raqD.v_ini;
      break;
    case " ":
      //-- El saque solo funciona en el estado de SAQUE
      if (estado == ESTADO.SAQUE) {
        // //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();

        console.log(estado,'espacio');
        console.log("Saque!");

        //-- Llevar bola a su posicion incicial
        bola.init();

        //-- Reinicio el marcador
        ESTADO.TANTO_J1 = 0;
        ESTADO.TANTO_J2 = 0;

        //-- Darle velocidad
        bola.vx = bola.vx_ini;
        bola.vy = bola.vy_ini;

        //-- Cambiar al estado de jugando!
        estado = ESTADO.JUGANDO;

        return false;
      }
    default:
  }
}


//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }
  if (e.key == "p" || e.key == "l") {
    raqD.v = 0;
  }

}
