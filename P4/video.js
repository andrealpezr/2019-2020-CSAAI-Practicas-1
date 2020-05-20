// Mejoras:
// Modo automático: Mediante un botón se activará el modo automático. Si se está en este modo, se
// retransmiten 3 segundos de cada fuente y se pasa a la siguiente. Los pulsadores de selección
// no deberán funcionar en este modo. Al apretar el pulsador de modo manual, se vuelve al modo normal

// Reproducción en bucle: Si se activa este modo, cada vez que se selecciona una fuente, se
//reproduce sólo durante 2 segundos y se vuelve atrás (2 segundos), repitiéndose ese trozo de
//dos segundos en bucle, constantemente. Mientras está activo ese modo se debe poder cambiar
//la fuente de vídeo (y el bucle se hará con la nueva fuente)

console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
const video2 = document.getElementById("video2")
const video3 = document.getElementById("video3")
const emision = document.getElementById("emision")

//-- Tamaño de la pantalla de video
video1.width=355;
video1.height=200;
video2.width=355;
video2.height=200;
video3.width=355;
video3.height=200;
emision.width=800;
emision.height=400;

//-- Imagen estática a mostrar cuando el video no ha arrancado
video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
emision.poster="test.jpg";

//-- Obtener los botones
const boton1 = document.getElementById("boton1")
const boton2 = document.getElementById("boton2")
const boton3 = document.getElementById("boton3")
const bucle = document.getElementById("bucle")
repeat = false;
var init = 0;
var final = 0;

//CON SONIDO
video1.onmouseover = () => {
  console.log("Mouse over video1!!");
  video1.muted = false;
}
video2.onmouseover = () => {
  console.log("Mouse over video2!!");
  video2.muted = false;
}
video3.onmouseover = () => {
  console.log("Mouse over video3!!");
  video3.muted = false;
}
emision.onmouseover = () => {
  console.log("Mouse over emision!!");
  emision.muted = false;
}

// SIN SONIDO
video1.onmouseout = () => {
  console.log("Mouse out video1!!");
  video1.muted = true;
}
video2.onmouseout = () => {
  console.log("Mouse out video2!!");
  video2.muted = true;
}
video3.onmouseout = () => {
  console.log("Mouse out video3!!");
  video3.muted = true;
}

emision.onmouseout = () => {
  console.log("Mouse out emision!!");
  emision.muted = true;
}

boton1.onclick = () => {
  emision.src = video1.src;
  emision.currentTime = video1.currentTime;
  video1.style.border = "6px solid red";
  video2.style.border = "6px solid white";
  video3.style.border = "6px solid white";
  emision.play();
};

boton2.onclick = () => {
  emision.src = video2.src;
  emision.currentTime = video2.currentTime;
  video1.style.border = "6px solid white";
  video2.style.border = "6px solid red";
  video3.style.border = "6px solid white";
  emision.play();
};

boton3.onclick = () => {
  emision.src = video3.src;
  emision.currentTime = video3.currentTime;
  video1.style.border = "6px solid white";
  video2.style.border = "6px solid white";
  video3.style.border = "6px solid red";
  emision.play();
};

bucle.onclick = () => {
  console.log(repeat);
  init = emision.currentTime;
  final = emision.currentTime + 2;
  if(!repeat){
    repeat = true;
    console.log(repeat);
  }else{
    repeat = false;
    console.log(repeat);
  }
}

setInterval(()=>{
    console.log(init, final);
    if (repeat){
         if (emision.currentTime > final){
           emision.currentTime = init;
         }
     }
    //tiempo.innerHTML = hora(display.currentTime);
  },20); //-- timer

emision.addEventListener("timeupdate",function(ev){
    vtime = emision.currentTime;
    h = Math.floor( vtime / 3600 );
    m = Math.floor( (vtime % 3600) / 60 );
    s = Math.floor(vtime % 60);
    time = h + ":" + m + ":" + s;
    document.getElementById("crono").innerHTML = time;
  },true);


// function startTime() {
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();
//   var minuto = (today.getMinutes()<9)?"0"+today.getMinutes():today.getMinutes();
//    var segundo = (today.getSeconds()<9)?"0"+today.getSeconds():today.getSeconds();
//   console.log( h, minuto , segundo);
//   // add a zero in front of numbers<10
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById("crono").innerHTML = h + ":" + m + ":" + s;
//   var t = setTimeout(function(){ startTime() }, 500);
// }
// function checkTime(i){
//   if (i < 10) {
//       i = "0" + i;
//     }
//     return i;
// }
