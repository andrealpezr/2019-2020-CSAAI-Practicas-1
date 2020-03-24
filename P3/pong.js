// Reset: Llevar la bola a su posición inicial
// Init: Inicializar la bola, pasándole como argumento el contexto del canvas
// Draw: Dibujar la bola
// Update: Actualizar el estado de la bola

console.log("Ejecutando JS...");

var canvas = document.getElementById("canvas");
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

const ctx = canvas.getContext("2d");

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

//-- Pintar todos los objetos en el canvas
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

  //-- Raqueta izquierda
  ctx.rect(raqI.x, raqI.y, raqI.width, raqI.height);

  //-- Raqueta derecha
  ctx.rect(540, 300, 10, 40);

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


//-- Inicializa la bola: A su posicion inicial
bola.x = bola.x_ini;
bola.y = bola.y_ini;

//-- Inicializar la raqueta a su posicion inicial
raqI.x = raqI.x_ini;
raqI.y = raqI.y_ini;

draw();
