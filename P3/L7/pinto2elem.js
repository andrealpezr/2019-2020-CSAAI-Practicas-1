//cuando uso la funcion main() en html tengo que poner en el body onload = main()
// y  cuando uso este método no hace falta usar defer.
function main()
{
  console.log("Pong: Main: Start!")
  //puedo definir aqui las medidas del canvas, pero en html tengo que usar la
  //la etiqueta canvas para poder dibujar el canvas en css.
  var canvas = document.getElementById('display')
  canvas.width = 600;
  canvas.height = 400;

//-- Obtener el contexto para pintar en el canvas
  var ctx = canvas.getContext("2d");

  //----- Dibujar la Bola
  ctx.beginPath();
  ctx.fillStyle='white';

  //-- x,y, anchura, altura
  ctx.rect(150, 150, 8, 8);
  ctx.fill();

  //-- Raquetas
  ctx.fillStyle = 'white';
  // x , y , anchura, altura
  ctx.fillRect(50,100, 10, 40)
  ctx.fillRect(500,150, 10, 40)

  //-- Línea
 // donde empieza el primer punto x , y
  ctx.moveTo(300, 20);
   // donde se mueve x , y
  ctx.lineTo(300, 380);
  ctx.strokeStyle = 'white';
  //-- Cambiar el tamaño de la linea del trazo
  ctx.lineWidth = 4;
  //-- Dibujar el trazo
  ctx.stroke()

  //-- Texto solido
 ctx.font = "40px Arial";
 ctx.fillStyle = 'white'
 ctx.fillText("1", 225, 50);
 ctx.fillText("2", 350, 50);

}
