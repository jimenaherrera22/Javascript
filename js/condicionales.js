console.log("condicionales")

//IF = SI
//Sintaxis
/**
 * if (condicion logica a evaluar){accion a efectuar en caso de que se cumpla la condicion} solo se efectua si la condicion logica es true
 */
let edad=17
//IF BASICO
/**if(!(edad>18)){
     console.log("Eres mayor de edad")
}*/
//else se usa para si no
/**if(edad>=21){
    console.log("Eres legalmente responsable")
}else{
    console.log("Eres menor de 21 años")
}*/

/**
 * Definicion de pseudocodigo del IF
 * 
 * Basico = if(){}
 * SI(CONDICION-A-EVALUAR=VERDADERO){
 * EJECUTA ESTA INSTRUCCION
 * }
 * 
 * COMBINADO 
 * if(){}else{}
 *-->SI(CONDICION-A-EVALUAR=VERDADERO){
 * EJECUTA ESTA INSTRUCCION
 * }SINO "SE EJECUTA EN CASO DE QUE LA CONDICION SEA FALSA"{
 * EJECUTA ESTA INSTRUCCION
 * }
 * 
 * if(){}else if(){}else{}
 *-->SI(CONDICION-A-EVALUAR=VERDADERO){
 * EJECUTA ESTA INSTRUCCION
 * }SINO SI (CONDICION-A-EVALUAR=VERDADERO){
 * EJECUTA ESTA INSTRUCCION
 * }SINO{
 * EJECUTA ESTA INSTRUCCION
 * }
 */
//IF COMBINADO
if(edad<21){
    console.log("Eres menor de edad")
}else if(edad>=21 && edad<50){
    console.log("Eres un joven adulto tu edad es:", edad)
}else if(edad>=50 && edad<60){
    console.log("Eres adulto, tu edad es:", edad);
}else{
    console.log("Eres anciano, tu edad es:", edad)
}

if(edad>21){
if(edad>=18){
console.log("Tienes entre 18 y 20 años")
}else{
    console.log("Eres menor de 18 años");
}
}else{
if(edad<50){
console.log("Tienes entre 21 y 49 años");
}else{
    console.log("Tienes 50 años o mas");
}
}

/** CONDICIONALES MULTIPLES */

/**
 * EN CASO DE (EXPRESION A EVALUAR){
 * CASO: (COMPARA LA EXPRESION CON UN VALOR)
 * EJECUTA UN INSTRUCCION
 * BREAK;
 * N...
 * DEFAULT
 * EJECUTA UNA INSTRUCCION
 * BREAK;
 * }
 */

/**switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

//let dia=parseInt(prompt("Por favor ingresa un numero"))
let dia=4
switch (dia) {
    case 1:
        console.log("Lunes");
        document.write("Lunes")
        break;
        case 2:
        console.log("Martes");
        document.write("Martes")
        break;
        case 3:
        console.log("Miercoles");
        document.write("Miercoles")
        break;
        case 4:
        console.log("Jueves");
        document.write("Jueves")
        break;
        case 5:
        console.log("Viernes");
        document.write("Viernes")
        break;
        case 6:
        console.log("Sabado");
        document.write("Sabado")
        case 7:
        console.log("Domingo");
        document.write("Domingo")
        break;
    default:
        console.log("No ingresaste un numero valido");
        break;
}

switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:    
    case 5:
        console.log("Es dia laboral");
        document.write(" Es dia laboral")
        break;
        case 6:
        case 7:   
            console.log("Es fin de semana");
            document.write(" Es fin de semana")
            break;
    default:
        console.log("No es un dia valido");
        break;
}

//BUCLES
/**
 * WHILE = MIENTRAS (CONDICION-LOGICA=VERDADERA){
 * EJECUTA LA INSTRUCCION
 * }
 * SI NO ES VERDADERO CREA UN BUCLE INFINITO 
 */
/**while (condition) {
    
}*/

let cantidad=0
let contador=0
while (cantidad<=5) {
    console.log("La cantidad es:",cantidad);
    cantidad++
    contador++
    console.log("El valor de contador es:",contador);
}

/**
 * DO WHILE
 */

do {
    console.log("La cantidad es:",cantidad);
    cantidad++
    contador++ 
} while (cantidad<=5);
console.log("El valor de contador es:",contador);
console.log("La cantidad es:",cantidad);

//CICLOS
/**
 * FOR --> PARA
 * 
 * PARA (INICIALIZACION; CONDICION; INCREMENTADOR){
 * INSTRUCCION A EJECUTAR
 * }
 */

let contadorFor=0

for (let index = 0; index < 10; index++) {
    console.log("El valor de index es:",index);
    contadorFor++;
}

console.log("El ciclo for se ejecuto"+contadorFor+"veces");