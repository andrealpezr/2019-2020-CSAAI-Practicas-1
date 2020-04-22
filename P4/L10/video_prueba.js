
console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
const video2 = document.getElementById("video2")
const video3 = document.getElementById("video3")
const emision = document.getElementById("emision")

//-- Tamaño de la pantalla de video
video1.width=400;
video1.height=200;
video2.width=400;
video2.height=200;
video3.width=400;
video3.height=200;
emision.width=800;
emision.height=400;

//-- Imagen estática a mostrar cuando el video no ha arrancado
video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
emision.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";

//-- Obtener los botones
const boton1 = document.getElementById("boton1")
const boton2 = document.getElementById("boton2")
const boton3 = document.getElementById("boton3")

video1.play();
video2.play();
video3.play();

//-- Función de retrollamada del botón de ver
boton1.onclick = () => {
  console.log("Click! video 1");
  emision.src = video1.src;
  emision.play();
};

boton2.onclick = () => {
  console.log("Click! video 2");
  emision.src = video2.src;
  emision.play();
};

boton3.onclick = () => {
  console.log("Click! video 3");
  emision.src = video3.src;
  emision.play();
};

//-- Funcion de retrollamada del boton de parar
pause1.onclick = () => {
  video1.pause();
  video1.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
  emision.src=null;
  video1.src=null;
}
pause2.onclick = () => {
  video2.pause();
  video2.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
  emision.src=null;
  video2.src=null;
}
pause3.onclick = () => {
  video3.pause();
  video3.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
  emision.src=null;
  //-- Quitar la fuente de video, para que se muestre la imagen definida en el atributo poster
  video3.src=null;
 }
