console.log("Ejecutando JS...");

display = document.getElementById("display")
coma = document.getElementById("coma")
igual = document.getElementById("igual")
reset = document.getElementById("reset")
del = document.getElementById("delete")
// Los estados de la máquina los implementamos mediante un objeto cuyas propiedades
// son los estados, y a los que asinamos un número diferente.
const estados = {
  init: 0,
  op1: 1,
  operation: 2,
  op2_init: 3,
  op2: 4,
}

//Variable let
let numeros = document.getElementsByClassName("numero");
for(i=0; i<numeros.length; i++){
  numeros[i].onclick = (ev) => {
  digito(ev.target) // esto es la llamada a la funcion de abajo
 }
}

function digito(boton){
  if(display.innerHTML=="0") {
    display.innerHTML = boton.value;
  }else{
    display.innerHTML += boton.value;
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
