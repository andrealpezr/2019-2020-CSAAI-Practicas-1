console.log( "Que comiencen los juegos de JavaScript" );
//esto es un objeto

var objeto = {
  //atributos:valor
  //atributos:funcion(){}

  botones:{
      por: document.getElementById('*'),
      reset: document.getElementById('reset'),
      igual: document.getElementById('='),
      entre: document.getElementById('/'),
      display: document.getElementById('display'),
  },
  num: function() {

 },
}
//Variable let
let numeros = document.getElementsByClassName("numero");
for(i=0; i<numeros.length; i++){
  numeros[i].onclick = (ev) => {
  if(objeto.botones.display.innerHTML=="0") {
      objeto.botones.display.innerHTML = ev.value;
  }else{
      objeto.botones.display.innerHTML += ev.value;
  }
 }
}







// const Pelicula ={
//   nombre: 'Harry',
//   id :01,
//   reproducir(){
//     return 'reproduciendo...harry'
//   }
// }
// console.log(Pelicula.reproducir());


// suma = document.getElementById("suma")
// resta = document.getElementById("resta")
// multiplicacion = document.getElementById("multiplicacion")
// division = document.getElementById("division")
