console.log("Ejecutando JS...");

  var display = document.getElementById("display");
  var igual = document.getElementById("igual");
  var coma = document.getElementById("coma");
  var reset = document.getElementById("AC");
  var delete = document.getElementById("delete");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");

  //no hace falta poner var, va a funcionar igual
  //Variable let
  let numeros = document.getElementsByClassName("numero");
  for(i=0; i<numeros.length; i++){
    numeros[i].onclick =(ev) =>{
    // que es tarjet??????
    numero(ev.target);
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
    display.innerHTML += "+";
  }

  igual.onclick = () => {
    display.innerHTML = eval(display.innerHTML);
  }
