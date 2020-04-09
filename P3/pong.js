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
  TANTO_J1 : 0,
  TANTO_J2 : 0,
}
//-- Arrancamos desde el estado inicial
let estado = ESTADO.INIT;

let level = 1; ///////ver como hacer !!!
let nivel = document.getElementsByClassName("level");
for(i=0; i<nivel.length; i++){
  nivel[i].onclick = (ev) => {
       // level = ev.target.value; no va bien
       estado = ESTADO.SAQUE;
   }
}
console.log(level, 'lev');

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
    ctx.fillStyle = "yellow";
    ctx.fillText("Pulsa Start!", 30, 350);
  }

  //-- Dibujar el texto de comenzar
  console.log(estado);
  if (estado == ESTADO.INIT) {
    console.log(estado, 'pulsa nivel');
    ctx.font = "40px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Pulsa un nivel!", 30, 350);
  }
}

function animacion()
{
  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  raqD.update();


//-- Hay colisión. Cambiar el signo de la bola
  if (bola.x >= canvas.width) {
    bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }else if(bola.x <= 0){
    bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }else if(bola.y >= canvas.height){
    bola.vy = bola.vy * -1;
    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }else if(bola.y <= 0 ){
    bola.vy = bola.vy * -1;
    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }

  if (bola.x <= bola.size) {
     estado = ESTADO.SAQUE;
     console.log(estado,'marco');
     ESTADO.TANTO_J1 += 1;
     console.log("Tanto!!!!");
     bola.init();

  }else if (bola.x > canvas.width){
     estado = ESTADO.SAQUE;
     console.log(estado, 'marco');
     ESTADO.TANTO_J2 += 1;
     console.log("Tanto!!!!");
     bola.init();

  }

  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {
    bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play()
  }else if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)){
    bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play()
    }

  //-- Actualizar coordenada x de la bola, en funcion de su velocidad
  bola.update();

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();

}

//-- Crear la bola
const bola = new Bola(ctx, level);

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 540;
raqD.y_ini = 300;
raqD.init();

draw();

// Usamos la función setInterval() que ya conocemos para arrancar la animación
setInterval(()=>{
       animacion();
},16);

//-- Obtener el boton de saque
const start = document.getElementById("start");
//-- Obtener el boton de reset
const reset = document.getElementById("reset");

if (estado == ESTADO.SAQUE) {
  start.onclick = () => {
    estado = ESTADO.JUEGO;
    console.log(estado,'start');
    console.log("Saque!");

  }

  reset.onclick = () => {
    bola.init();
    estado = ESTADO.INIT;
    console.log(estado, 'reset');
    console.log("Reset!");

  }
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
        //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();

        console.log(estado);
        console.log("Saque!");

        //-- Llevar bola a su posicion incicial
        bola.init();

        //-- Darle velocidad
        //bola.vx = bola.vx_ini;

        //-- Cambiar al estado de jugando!
        estado = ESTADO.JUGANDO;

        return false; //?
        // break;
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
