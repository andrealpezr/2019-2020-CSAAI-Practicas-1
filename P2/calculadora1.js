console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
reset = document.getElementById("reset")
del = document.getElementById("delete")

//-- Crear un array con todos los elementos
//-- de la clase digito
digito = document.getElementsByClassName("numero")

for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    display.innerHTML += ev.target.value;
  }
}

//-- Insertar simbolo de sumar
suma.onclick = (ev) => {
  display.innerHTML += ev.target.value;
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
reset.onclick = () => {
  display.innerHTML = "0";
}
