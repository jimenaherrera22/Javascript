//BOM --> Browser Objet Model= Nos permite manipular el navegador: su historial, su barra de direcciones, la informacion del navegador, la camara, la pantalla, entre otras cosas.

//*Funciones de Tiempo

//setInterval --> ejecuta una tarea una sola vez cada un determinado lapso de tiempo
//El tiempo es en milisegundos

const idInterval = setInterval(() =>console.log("Hola Mundo"),1000);

//setTimeout --> ejecuta una tarea una sola vez,pasado determinado tiempo

//setTimeout(()=>console.log("Hola alan"),4000);
setTimeout(()=>{
    console.log("Detenhemos el intervalo");
    clearInterval(idInterval);
},10000)

//clearInterval(id)detiene la ejecucion del setInterval le pasamos su id

//!Cuenta Regresiva
let contador=10
const cuentaRegresiva= setInterval(()=>{
console.log("Despegue en ",contador);
contador--;
},1000);

setTimeout(()=>{
    console.log("despegueee");
    clearInterval(cuentaRegresiva);
},11000)