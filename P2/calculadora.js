function init() {
  var resultado = document.getElementById('resultado');

  var cero = document.getElementById('0');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById ('6');
  var siete = document.getElementById ('7');
  var ocho = document.getElementById ('8');
  var nueve = document.getElementById('9');

  var igual = document.getElementById('igual');
  var coma = document.getElementById('coma');
  var ac = document.getElementById('AC');
  var reset = document.getElementById('reset');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  uno.onclik = function(e) {
    resultado.textContent = resultado.textContent + "1";
  }

}
