//Aplicación de los filtros a diferentes imágenes. Tener en una parte dos o más imágenes iniciales.
//El filtro se aplicará a la imagen que esté seleccionada (y sólo a ella).
//Filtro adicional: Imagen especular. Dar la vuelta a la imagen, horizontalmente
//Filtro adicional: Imagen boca abajo
//Filtro adicional: Añadir ruido. Sumar o restar valores pequeños generados aleatoriamente
//para cada uno de los píxeles. De esta forma, cada pixel varía aleatoriamente (y ligeramente) sus valores


console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador de cada componente
const deslizadorR = document.getElementById('deslizadorR');
const deslizadorG = document.getElementById('deslizadorG');
const deslizadorB = document.getElementById('deslizadorB');

//-- Valor del deslizador de cada componente
const valueR = document.getElementById('valueR');
const valueG = document.getElementById('valueG');
const valueB = document.getElementById('valueB');

//botones
const grises = document.getElementById('grises');
const negativo = document.getElementById('negativo');
const invertir = document.getElementById('bocaabajo');
const alternar = document.getElementById('horizontal');

img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas, sin cambios
  ctx.drawImage(img, 0,0);
  console.log("Imagen lista...");

  var original = img;

};

function filtroRGB(){
  console.log("filtro RGB");
  valueR.innerHTML = deslizadorR.value;
  valueG.innerHTML = deslizadorG.value;
  valueB.innerHTML = deslizadorB.value;

  ctx.drawImage(img, 0,0);

  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  npixels = canvas.width * canvas.height*4

  umbralR = deslizadorR.value
  umbralG = deslizadorG.value
  umbralB = deslizadorB.value
  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < npixels; i+=4) {
    if (data[i] > umbralR){
      data[i] = umbralR;
    }
    if (data[i+1] > umbralG){
      data[i+1] = umbralG;
    }
    if (data[i+2] > umbralB){
      data[i+2] = umbralB;
    }
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

grises.onclick  = () => {
  console.log("filtro de grises");
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  npixels = canvas.width * canvas.height*4

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    var r = data[i];
    var g = data[i+1];
    var b = data[i+2];
    grey = (3*r + 4*g + b)/8;
    data[i] = data[i+1] = data[i+2] = grey;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

negativo.onclick  = () => {
  console.log("Invertimos la imagen");
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data
  npixels = canvas.width * canvas.height*4

  for (let i = 0; i < npixels; i+=4) {
        data[i] = 255 - data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];
    }
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
}

invertir.onclick  = () => {
  console.log("Invierto la imagen");
  ctx.translate(0,img.height);
  ctx.scale(1,-1);
  ctx.drawImage(img, 0,0);
}

alternar.onclick  = () => {
  console.log("Alterno la imagen");
  ctx.translate(img.width,0);
  ctx.scale(-1,1);
  ctx.drawImage(img, 0,0);
}

//-- Funcion de retrollamada del deslizadorR
deslizadorR.oninput = () => {
  filtroRGB();
}

//-- Funcion de retrollamada del deslizadorG
deslizadorG.oninput = () => {
  filtroRGB();
}

//-- Funcion de retrollamada del deslizadorB
deslizadorB.oninput = () => {
  filtroRGB();
}

console.log("Fin...");
