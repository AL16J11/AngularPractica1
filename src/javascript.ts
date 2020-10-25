/**
 * TEMPLATES LITERALES 
 */
let wolverine = {
    nombre: "Logan",
    poder: "Esqueleto de adamantium y regeneracion"
};

let deadpool = {
    nombre: "Wade Wilson",
    poder: "Regeneracion y sentidos agudizados"
};
function saludar(nombre: string, poder:string) {
    console.log("Hola " + nombre.toUpperCase());
    alert("Hola "+ nombre + " tu poder es "+ poder);
    alert(`Hola ${nombre} tu poder es ${poder}`);
}



//saludar(wolverine.nombre, wolverine.poder);
//saludar(deadpool.nombre, deadpool.poder);

/*
* FUNCION CON DIFERENTES TIPOS DE PARAMETROS
*/

// *@Parametros Obligatorios todos los parametros tienen que ser enviados 

function activar(quien:string, objeto:string ) {
    let mensaje:string;
    mensaje = `${quien} activo la ${objeto}`;
    alert(mensaje);
}

//activar("Gordon", "batiseñal");

/** 
 * Funcion con parametro Opcionales, cuando no se envian tienen un valor undefined o null
*/

function activar2(quien:string, objeto?:string) {
    let mensaje:string;
    mensaje = `${quien} activo la ${objeto}`;
    alert(mensaje);
}

//activar2("Gordon");

/** Funcion con parametros Por defecto
 * Cuando un parametro esta por defecto no es necesario mandar  un valor, ya que tendra un valor predeterminado.
*/ 

function activar3(quien:string, objeto:string ="Batiseñal") {
    let mensaje:string;
    mensaje = `${quien} activo la ${objeto}`;
    alert(mensaje);
}

//activar3("Gordon");

/**
 * *FUNCION NORMAL VS FUNCION FLECHA
 * Estructura de una funcion nomarl 
 * * let miFuncionNorlma = function( a ){
 * * return a;}
 * 
 * Estructura de una funcion flecha 
 * * let miFuncionFlecha = a => a;
 */



let SumarFNormal = function (a:number, b:number) {
    return a+b;
}

let SumarFFlecha= (a:number, b:number) => a+b;

let mayuscularFNormal = function (nombre:string) {
    return nombre.toUpperCase();
}

let mayuscularFFlecha = (nombre:string) => nombre.toUpperCase();

function imprimirResultado(a:any) {
    alert(`Este es el resultado que arrojo a ${a}`);    
}

let imprimirResultado2 = (a:any) => alert(a);

let hulkFNormal ={
    nombre:"Hulk",
    smash(){
        setTimeout(function(){
           //alert(this.nombre+" smash!! Función Normal");
        }, 1500);
    }
}



let hulkFFlecha ={
    nombre:"Hulk",
    smash(){
        setTimeout(() => {
            alert(this.nombre+" smash!!  Función con Flecha");
        }, 5000);
    }
}



// DESTRUCTURACIÓN DE OBJETOS Y ARREGLOS

let avengerObjeto = {
    nombre:"Steve",
    clave:"Capitan America",
    poder: "Drogra Super Soldado"
}

let {nombre, clave, poder}= avengerObjeto;


let avengerArreglo:string[]=["Thor", "Steve", "Tony"];

let[thor, capi, iroman]= avengerArreglo;

//console.log(iroman);

//PROMESAS EN JS 

let prom1 = new Promise(function(resolve:any, reject:any) { 
    setTimeout(() => {
       alert("promesa terminada");
        //termina bien
        resolve();
        //termina mal descomentar si se quiere utilizar reject
        //reject()
    }, 1500);
})
console.log("Paso1");
prom1.then( function() {
    alert("Ejecutarse cuando todo este bien! :)");  
}, function () {
   alert("Ejecutarse si algo sale mal :(");
})
console.log("Paso2");


//INTERFACES




interface Xmen{
    nombreClave:string,
    poder:string
};
let ciclope:Xmen ={
    nombreClave:"ciclope",
    poder:"Lase de sus ojos"
};
function enviarMision(xmen:{nombreClave:string}) {
    console.log(`Enviado a misión a ${xmen.nombreClave}`);
};

function enviarCuartel(xmen:{nombreClave:string}) {
    console.log(`Enviado a misión a ${xmen.nombreClave}`);
};

/**
 * En este caso no se puede utlizar wolverine como parametro ya que no cuenta con las caracteristicas
 * necesarias para implementar la interface, en este caso las propiedades deben llamarse igual que la interface
 * en la cual ya se declararon las propiedades y su tipo, tambien se pueden implementar los metodos. 
 * enviarCuartel(wolverine);
 * 
 */

enviarMision(ciclope);
enviarCuartel(ciclope);
