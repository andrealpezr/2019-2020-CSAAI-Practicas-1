console.log("Ejecutando JS...");

display = document.getElementById("display")
igual = document.getElementById("igual")
coma = document.getElementById("coma")
reset = document.getElementById("reset")
del = document.getElementById("delete")
suma = document.getElementById("suma")
resta = document.getElementById("resta")
multiplicacion = document.getElementById("multiplicacion")
division = document.getElementById("division")


//Variable let
let numeros = document.getElementsByClassName("numero");
for(i=0; i<numeros.length; i++){
  numeros[i].onclick = (ev) =>{
  digito(ev.target);  // esto es la llamada a la funcion de abajo
  }
}

function encender(boton){
  console.log(boton.value);
  if ((display.innerHTML == " ") & (boton.value == "AC")) {
    display.innerHTML == "0" ;
  } else{
    display.innerHTML == " ";
  }
}
function digito(boton){
  if(display.innerHTML=="0") {
    display.innerHTML = boton.value;
  }else{
    display.innerHTML += boton.value;
  }
}


suma.onclick = () => {
  display.innerHTML += suma.value;
}

division.onclick = () => {
  display.innerHTML += division.value;
}

multiplicacion.onclick = () => {
  display.innerHTML += multiplicacion.value;
}

igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

coma.onclick = () => {
  display.innerHTML += ".";
}

reset.onclick = () => {
  display.innerHTML = "0";
}

//del.onclick = () => {
  //display.innerHTML = function eliminar(e) =>{
    //if(e.keyCode == 8) {
      //val = document.getElementById('display').innerHTML;
      //if(val.length != 0){
        //  val = val.substring(0, val.length - 1);
        //  display.innerHTML = val;
        //}
    //}
//  }
//}
