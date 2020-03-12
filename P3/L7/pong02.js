console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//----- Dibujar la Bola
ctx.beginPath();
ctx.fillStyle='white';

//-- x,y, anchura, altura
ctx.rect(150, 100, 20, 20);
// ¿Qué ocurre si metes un valor incorrecto?. Exacto! Que la bola NO se dibuja!
// Pero no sale ningún mensaje de error en el navegador (aunque sí podrás verlo en la consola).
// Observa que si el objeto lo sitúas en unas coordenadas fuera del canvas
// (por ejemplo 1000, 1000), no se dibuja nada, y tampoco obtendrás ningún mensaje de error

ctx.fill();

// con la x e y se mueve y lo otro es altura y anchura.

// El cuadrado lo dibujamos con el método rect() al que se le pasan 4 argumentos:
// las coordenadas de la esquina superior izquierda del cuadrado, su anchura y su altura.
// Al ser un cuadrado, la altura y la anchura serán iguales, con un valor de 10 píxeles
// Para su posición en pantalla de momento usamos una fija: por ejemplo (100, 200)
