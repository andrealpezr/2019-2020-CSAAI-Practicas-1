
console.log("Ejecutando JS...");

var canvas = document.getElementById("canvas");
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

const ctx = canvas.getContext("2d");

//-- Obtener Sonidos
const sonido_raqueta = new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("pong-rebote.mp3");
//-- Crear los elementos de sonido
const click_sound = new Audio('click.mp3');

//-- Objeto: Bola
const bola = {

  size : 5,

  x_ini : 100,
  y_ini : 200,

  //-- Posicion generica de la bola
  x : 0,
  y : 0,

  //-- Velocidad inicial de la bola
  vx_ini : 6,
  vy_ini : 3,

  //-- Velocidad genérica de la bola
  vx : 0,
  vy : 0,
}

//-- Objeto raqueta
const raqD = {

  width : 10,
  height: 40,

  x_ini : 540,
  y_ini : 200,

  //-- Constante: Velocidad
  v_ini : 3,

  //-- Velocidad (variable)
  v : 0,
}

//-- Objeto raqueta
const raqI = {

  width : 10,
  height: 40,

  x_ini : 50,
  y_ini : 100,

  //-- Constante: Velocidad
  v_ini : 3,

  //-- Velocidad (variable)
  v : 0,
}

function draw() {

  //---- Dibujar la Bola
  ctx.beginPath();
  ctx.fillStyle='white';

  //-- x,y, anchura, altura
  ctx.rect(bola.x, bola.y, bola.size, bola.size);
  ctx.fill();

  //---- Dibujar las raquetas
  ctx.beginPath();
  ctx.fillStyle='white';

  //-- Raqueta derecha
  ctx.rect(raqD.x, raqD.y, raqD.width, raqD.height);

  //-- Raqueta izquierda
  ctx.rect(raqI.x, raqI.y, raqI.width, raqI.height);

  //pintar
  ctx.fill();

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
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("0", 200, 80);
  ctx.fillText("1", 340, 80);
}

  //-- Actualizar las posiciones de los objetos móviles
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar la raqueta con la velocidad actual
  raqD.y += raqD.v;
  raqI.y += raqI.v;
  console.log('no seeeeee');


//-- Hay colisión. Cambiar el signo de la bola
  if (bola.x >= canvas.width) {
    bola.vx = bola.vx * -1;
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }else if(bola.x <= 0){
    bola.vx = bola.vx * -1;
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }else if(bola.y >= canvas.height){
    bola.vy = bola.vy * -1;
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }else if(bola.y <= 0 ){
    bola.vy = bola.vy * -1;
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }

  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {
    bola.vx = bola.vx * -1;
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play()
  }else if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)){
    bola.vx = bola.vx * -1;
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play()
    }

  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola.x += bola.vx;

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();

}

//-- Inicializa la bola: A su posicion inicial
bola.x = bola.x_ini;
bola.y = bola.y_ini;

//-- Inicializar la raqueta a su posicion inicial
raqI.x = raqI.x_ini;
raqI.y = raqI.y_ini;
raqD.x = raqD.x_ini;
raqD.y = raqD.y_ini;


// función animacion() se llame periódicamente, con una frecuencia de 60Hz (unos 17ms). Usamos la función setInterval() que ya conocemos para arrancar la animación
setInterval(()=>{
  animacion();
},16);

//-- Obtener el boton de saque
const start = document.getElementById("start");

start.onclick = () => {
  bola.x += bola.x_ini;
  bola.vx += bola.vx_ini;
  console.log("Saque!");
  //-- Reproducir sonido
  click_sound.currentTime = 0;
  click_sound.play();
}

//-- Obtener el boton de reset
const reset = document.getElementById("reset");

reset.onclick = () => {
  bola.x = bola.x_ini;
  bola.vx = bola.vx_ini;
  console.log("Reset!");
  //-- Reproducir sonido
  click_sound.currentTime = 0;
  click_sound.play();
}

//-- Retrollamada de las teclas OTRA FORMA
window.onkeydown = (e) => {
  switch (e.key) {
    //-- Tecla ESPACIO: Saque
    case " ":
      console.log('espacio');
      bola.x += bola.x_ini;
      bola.vx += bola.vx_ini;
      raqD.y += -raqD.v_ini;
      raqI.v += raqI.v;
      //-- Reproducir sonido
      sonido_raqueta.currentTime = 0;
      sonido_raqueta.play();
      break;
    case "q":
      console.log('up');
      raqI.y += raqI.v_ini * -1;
      break;
    case "a":
      console.log('down');
      raqI.y += raqI.v_ini;
      break;
    case "p":
      raqD.v = raqD.v_ini * -1;
      break;
    case "l":
      raqD.v = raqD.v_ini;
      break;
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
