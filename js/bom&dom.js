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

//DOM document object model

let body=document.body;
console.log(body);

body.innerHTML+=`<h1 class="text-danger">Hola Mundo</h1>`
body.innerHTML+=`<p class="bg-dark text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quis?</p>`

//pasandole el nombre de la etiqueta html
//let h2=document.querySelector("h2")
//console.log(h2);

//pasandole el id

let h2TCH=document.querySelector("#h2ToChange")

console.log(h2TCH);

let h2=document.getElementById("h2ToChange")
console.log(h2);

h2.textContent="H2 modificado"
h2.classList.add("bg-secondary","text-dark");
console.log(h2.classList);

h2.classList.remove("bg-secondary");
h2.classList.replace("text-dark","text-danger");

let divPadre=document.getElementById("divPadre");

console.log(divPadre);


function insertarCard() {
    divPadre.innerHTML+=` <div class="card my-5" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
    
}