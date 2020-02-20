console.log("Ejecutando js..");
const test = document.getElementById('test');

test.onclik = ()=>{
  console.log("click!");

  //-- Cambiar el color de fondo
  //-- Si no tenia color asignado, poner amarillo
  if (test.style.backgroundColor=="") {
    test.style.backgroundColor = "yellow";

  //-- Ya tiene color: quitarselo
  } else {
    test.style.backgroundColor = "";
  }
}
