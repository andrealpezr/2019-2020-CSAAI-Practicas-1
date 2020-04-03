console.log("Ejecutando JS...");

display = document.getElementById("display")
coma = document.getElementById("coma")
igual = document.getElementById("igual")
reset = document.getElementById("reset")
del = document.getElementById("delete")


const ESTADO  =  {
  INIT : 0 ,
  OP1 : 1 ,
  OPERATION : 2 ,
  OP2 : 3 ,
  COMA: false,
}
//-- Variable de estado
let estado = ESTADO.INIT;


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
    console.log(estado, "digito");
  }else if (estado == ESTADO.OP1 || estado == ESTADO.OP2 || estado == ESTADO.OPERATION){
    display.innerHTML += boton;
    console.log(estado,"digito");
    if (estado == ESTADO.OPERATION) {
      estado = ESTADO.OP2;
      console.log(estado);
    }
  }
}

//Variable let
let op = document.getElementsByClassName("operacion");
for(i=0; i<op.length; i++){
   op[i].onclick = (ev) => {
     console.log("hola");
     if(estado == ESTADO.OP1){
       display.innerHTML += ev.target.value;
       estado = ESTADO.OPERATION;
       console.log(estado,"op");
     }
   }
}

coma.onclick = (ev) => {
  if(ESTADO.COMA){
    console.log("No se pueden poner dos comas seguidas");
  }else{
    display.innerHTML += ev.target.value;
    ESTADO.COMA = true;
  }
}

igual.onclick = () => {
  console.log("no va?");
  console.log(estado);
  if(estado == ESTADO.OP2){
    display.innerHTML = eval(display.innerHTML);
    estado = ESTADO.OP1;
    ESTADO.COMA = false;
    console.log(estado,"igual");
    }
  }

//-- Poner a cero la expresion
reset.onclick = (ev) => {
  display.innerHTML = '0';
  estado = ESTADO.INIT;
  ESTADO.COMA = false;
  console.log(estado,"reset");
}

del.onclick = (ev) => {
   display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length - 1);
}
