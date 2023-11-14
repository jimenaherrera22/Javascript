//Esto es un comentario
//aqui vamos a comenzarcon javascript
console.log("Hola mundo!!");

//Tipos de datos:

//String: cadenas de caracteres, se lo representa porque esta contenido entre comillas simples o dobles
//Number: todos los numeros
//Booleanos: logicos solo toman dos valores true o false

//Array:
//Objet:
//Empty: null, nada

//Variables (var - let - const)

//Var deprecada -- no se usa¨.
//Crear o declarar una variable

//sintaxis:
/*
tipo de variable [nombre de la variable (CamelCase / nombre-de-la.variable / nombre_de_la_variable)] = [string o number o boolean o array o objet]
*/

let mensaje = "Esto es un mensaje"
console.log("<br>" + mensaje)
document.write(mensaje)
const token = "token"
//Console.log("let mensaje=",mensaje)
console.log("const token=",token)

//Cambiar el valor de una variable

mensaje = "Esto es otro mensaje distinto"
console.log(mensaje)
document.write("<br>" + mensaje)
mensaje= "50"
console.log(mensaje)
document.write("<br>" + mensaje)

let numero_1=10;
let numero_2=20;
let suma= numero_1+numero_2

console.log(numero_1 + numero_2)
document.write("<br>" + (numero_1 + numero_2))
document.write("<br> El resultado de la suma es: "+suma)
// Esto es un error -- token= "otro token";(No se puede cambiar el valor de una constante)

//Imprimir datos en el documento html

//document.write("Esto es un documento tipo write")

//Alert
alert("Hola Mundo con un ALERT")
alert("El resultado de la suma es: "+suma)