console.log("estoy en operadores")
//Operados de asignacion =
let numero=5 //declarando una variable tipo let y le estamos asignando/inicializando con el operador = y con valor 5
console.log("valor de numero: ",numero)

let numero2=3
console.log("valor de numero2: ",numero2)

numero2=numero
console.log("valor de numero2 luego de igularla a numero: ",numero2)

//OPERADORES ARITMETICOS +, -, /, %

let valor=10
let valor2=10

//operador suma 
let suma=valor + valor2  // tener en cuenta que si el valor de las variables es distinto de numeros el operador funciona como concatenacion
console.log("El valor de suma es: ",suma)

//operador resta

let resta=valor - valor2
console.log("El valor de la resta es: ",resta)

//operador multiplicacion
let multiplicacion= valor * valor2
console.log("El valor de multiplicacion es: ",multiplicacion)

//operador division

let division=valor/valor2
console.log("El valor de division es: ",division)

//operador modulo o resto

let resto=valor % valor2
console.log("El valor de resto es: ",resto)

//OPERADORES UNITARIOS

//operador de incremento

// opcion 1 valor = valor + 1

//valor++ //esto significa que se va a incrementar en 1 el valor de la variable
//valor+=valor2 //es quivalente a la suma 
valor+=3 // lo incrementa en 3
console.log("El valor de let valor es: ",valor)

//operador de decremento
//valor--
//valor-=7
//valor-="b" esto devuelve NaN
//valor+="b" //como no es un numero concatena 
valor-=3
console.log("El valor de let valor es: ",valor)

//operador de negacion solo funciona con valores o variables de tipo boolean(solo acepta true o false)

let logica=true
console.log("El valor de la let logica: ",logica)
console.log("El valor de la let logica NEGADO es: ",!logica)


//#OPERADORES CONDICIONALES (RELACIONALES - LOGICOS)

//relacionales (siempre devuelve true o false)

let variable1="10"
let variableble2="10"

//operador == "igual a"
//console.log("el op==",variable1==variableble2)
console.log("el op== es: ",variable1==valor)
//op ==== estrictamente igual "comprueba el valor de la variable y tambien los tipos de las mismas"

console.log("el op=== es: ",variable1===valor)

//op != ""es distinto
console.log("el op != es: ",variable1!=valor)

//op !== estrictamente distinto

console.log("el op !== es: ",variable1!==valor)

//>, <, >=,  <=
console.log("el valor de > es: ",valor>valor2)
console.log("el valor de < es: ",valor<valor2)
console.log("el valor de >= es: ",valor>=valor2)
console.log("el valor de <= es: ",valor<=valor2) 

//logico

//--AND LOGICO && "es true si ambas condiciones son true, caso contrario da false"

console.log("PROBANDO EL &&",variable1!=valor && variable1!==valor)

//--OR LOGICO ||, retorna true si al menos una de las condiciones evaluadas es true
console.log("PROBANDO EL || ",variable1!=valor || variable1!==valor)



