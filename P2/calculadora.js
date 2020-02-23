console.log("Ejecutando js");

function init(){
  //variables
  var cero = documento . getElementById ( '0' ) ;
  var uno = documento . getElementById ( '1' ) ;
  var dos = documento . getElementById ( '2' ) ;
  var tres = documento . getElementById ( '3' ) ;
  var cuatro = documento . getElementById ( '4' ) ;
  var cinco = documento . getElementById ( '5' ) ;
  var seis = documento . getElementById ( '6' ) ;
  var siete = documento . getElementById ( '7' ) ;
  var ocho = documento . getElementById ( '8' ) ;
  var nueve = documento . getElementById ( '9' ) ;

  var igual = documento . getElementById ( 'igual' ) ;
  var coma = documento . getElementById ( 'coma' ) ;
  var ac = documento . getElementById ( 'AC' ) ;
  var delete = documento . getElementById ( 'delete' ) ;
  var suma = documento . getElementById ( 'suma' ) ;
  var resta = documento . getElementById ( 'resta' ) ;
  var multiplicacion = documento . getElementById ( 'multiplicacion' ) ;
  var division = documento . getElementById ( 'division' ) ;
  var resultado = documento . getElementById ( 'resultado' ) ;

  //eventos
  cero.onclick() = function(){
    resultado.TextContent = resultado.TextContent + '1';
  }

}
