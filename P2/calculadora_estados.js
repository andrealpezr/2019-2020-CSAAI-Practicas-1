console.log("Ejecutando JS...");

display = document.getElementById("display")
coma = document.getElementById("coma")
igual = document.getElementById("igual")
reset = document.getElementById("reset")
del = document.getElementById("delete")
// Los estados de la máquina los implementamos mediante un objeto cuyas propiedades
// son los estados, y a los que asinamos un número diferente.
const ESTADO  =  {
  INIT : 0 ,
  OP1 : 1 ,
  OPERACIÓN : 2 ,
  OP2 : 3 ,
  OPERADO : 4 ,
},
//-- Variable de estado
let estado = ESTADO.INIT;

// Necesitamos tener tres funciones de retrollamada: una para los dígitos, otra
// para los operandos y otra para la tecla igual, que calcula el resultado final

//Variable let
let numeros = document.getElementsByClassName("numero");
for(i=0; i<numeros.length; i++){
  numeros[i].onclick = (ev) => {
  digito(ev.target.value) // esto es la llamada a la funcion de abajo
 }
}

function digito(boton){
  if(estado == ESTADO.INIT) {
    display.innerHTML = boton;
    estado = ESTADO.OP1;
  }else{
    display.innerHTML += boton;
  }
}

//Variable let
let op = document.getElementsByClassName("operacion");
for(i=0; i<op.length; i++){
   op[i].onclick = (ev) => {
   console.log(display.innerHTML[display.innerHTML.length-1]);
   if(display.innerHTML[display.innerHTML.length-1] == ev.target.value){
      alert('No se pueden poner dos operaciones seguidas');
    }else{
      display.innerHTML += ev.target.value;
    }
  }
}

for(i=0; i<numeros.length; i++){
 coma.onclick = (ev) => {
   console.log(display.innerHTML[display.innerHTML.length-1]);
   if(display.innerHTML[display.innerHTML.length-1] == "."){
     alert('No se pueden poner dos puntos seguidos');
  }else{
    display.innerHTML += ev.target.value;
  }
 }
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
  estado.igual = true;
}

//-- Poner a cero la expresion
reset.onclick = (ev) => {
  display.innerHTML = '0';
  //remplace ??
}

del.onclick = (ev) => {
   display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length - 1);
}
