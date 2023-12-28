let arrUsuarios=[];

const user1={
    nombre:"Alan",
    rol:"Admin"
};

const user2={
    nombre:"Valentin",
    rol:"Admin"
};

arrUsuarios.push(user1);
arrUsuarios.push(user2);

console.log(arrUsuarios);

//LOCAL STOTAGE
/**
 * ALMACENA DE LA SIGUIENTE MANERA KEY(nombre) - VALOR(string- string)
 * 
 * METODOS:
 * 
 * SET ITEM --> ES PARA CREAR NUEVOS REGISTROS
 * 
 * GET ITEM --> ES PARA OBTENER UN REGISTRO
 */
//GUARDAMOS ALGO EN EL LS
localStorage.setItem("TEST","PROBANDO EL ALMACENIMIENTO EN EL LOCAL STORAGE");

//OBTENER UN REGISTRO DE LS

console.log(localStorage.getItem("TEST"));

//MODIFICAR EL VALOR DE UN REGISTRO YA CREADO

localStorage.setItem("TEST", "PROBANDO LA MODIFICACION")

//ELIMINAR UN REGISTRO DE LS
localStorage.removeItem("TEST")

localStorage.setItem("TEST","PROBANDO EL ALMACENIMIENTO EN EL LOCAL STORAGE");
localStorage.setItem("TEST1","PROBANDO EL ALMACENIMIENTO EN EL LOCAL STORAGE");

//ELIMINAR TODO
localStorage.clear();


//JSON

localStorage.setItem("usuarios", JSON.stringify(arrUsuarios));

const user=localStorage.getItem("usuarios");
const userLS=JSON.parse(user);
console.log(user);
console.log(userLS);

