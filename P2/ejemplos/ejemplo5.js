// En Javascript se usan tanto los eventos, que no hace falta definir una nueva función
// externa, sino que se puede crear en la propia asignación del manejador.
// Así, el código javascript del ejemplo anterior se podría escribir de esta manera:

console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
test.onclick = function () {
  console.log("Click sobre el párrafo...")
}

// La función manejador_párrafo() ha desaparecido,
// y se ha incluido directamente en la asignación a test.onclick:

// El comportamiento es el mismo que en el ejemplo anterior; cada vez que se hace click sobre el párrafono,
// se ejecuta el código console.log("Click sobre el párrafo...").

// La diferencia es que esta notación es más compacta,y nos ahorramos el tener que
// definir el nombre de una función.

//notacion más compacta
// test.onclick = () => {
//   console.log("Click sobre el párrafo...")
// }
