"use strict";
/**
 * TEMPLATES LITERALES
 */
var wolverine = {
    nombre: "Logan",
    poder: "Esqueleto de adamantium y regeneracion"
};
var deadpool = {
    nombre: "Wade Wilson",
    poder: "Regeneracion y sentidos agudizados"
};
function saludar(nombre, poder) {
    console.log("Hola " + nombre.toUpperCase());
    alert("Hola " + nombre + " tu poder es " + poder);
    alert("Hola " + nombre + " tu poder es " + poder);
}
//saludar(wolverine.nombre, wolverine.poder);
//saludar(deadpool.nombre, deadpool.poder);
/*
* FUNCION CON DIFERENTES TIPOS DE PARAMETROS
*/
// *@Parametros Obligatorios todos los parametros tienen que ser enviados 
function activar(quien, objeto) {
    var mensaje;
    mensaje = quien + " activo la " + objeto;
    alert(mensaje);
}
//activar("Gordon", "batiseñal");
/**
 * Funcion con parametro Opcionales, cuando no se envian tienen un valor undefined o null
*/
function activar2(quien, objeto) {
    var mensaje;
    mensaje = quien + " activo la " + objeto;
    alert(mensaje);
}
//activar2("Gordon");
/** Funcion con parametros Por defecto
 * Cuando un parametro esta por defecto no es necesario mandar  un valor, ya que tendra un valor predeterminado.
*/
function activar3(quien, objeto) {
    if (objeto === void 0) { objeto = "Batiseñal"; }
    var mensaje;
    mensaje = quien + " activo la " + objeto;
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
var SumarFNormal = function (a, b) {
    return a + b;
};
var SumarFFlecha = function (a, b) { return a + b; };
var mayuscularFNormal = function (nombre) {
    return nombre.toUpperCase();
};
var mayuscularFFlecha = function (nombre) { return nombre.toUpperCase(); };
function imprimirResultado(a) {
    alert("Este es el resultado que arrojo a " + a);
}
var imprimirResultado2 = function (a) { return alert(a); };
var hulkFNormal = {
    nombre: "Hulk",
    smash: function () {
        setTimeout(function () {
            //alert(this.nombre+" smash!! Función Normal");
        }, 1500);
    }
};
var hulkFFlecha = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            alert(_this.nombre + " smash!!  Función con Flecha");
        }, 5000);
    }
};
// DESTRUCTURACIÓN DE OBJETOS Y ARREGLOS
var avengerObjeto = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Drogra Super Soldado"
};
var nombre = avengerObjeto.nombre, clave = avengerObjeto.clave, poder = avengerObjeto.poder;
var avengerArreglo = ["Thor", "Steve", "Tony"];
var thor = avengerArreglo[0], capi = avengerArreglo[1], iroman = avengerArreglo[2];
//console.log(iroman);
//PROMESAS EN JS 
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        alert("promesa terminada");
        //termina bien
        resolve();
        //termina mal descomentar si se quiere utilizar reject
        //reject()
    }, 1500);
});
console.log("Paso1");
prom1.then(function () {
    alert("Ejecutarse cuando todo este bien! :)");
}, function () {
    alert("Ejecutarse si algo sale mal :(");
});
console.log("Paso2");
;
var ciclope = {
    nombreClave: "ciclope",
    poder: "Lase de sus ojos"
};
function enviarMision(xmen) {
    console.log("Enviado a misi\u00F3n a " + xmen.nombreClave);
}
;
function enviarCuartel(xmen) {
    console.log("Enviado a misi\u00F3n a " + xmen.nombreClave);
}
;
/**
 * En este caso no se puede utlizar wolverine como parametro ya que no cuenta con las caracteristicas
 * necesarias para implementar la interface, en este caso las propiedades deben llamarse igual que la interface
 * en la cual ya se declararon las propiedades y su tipo, tambien se pueden implementar los metodos.
 * enviarCuartel(wolverine);
 *
 */
enviarMision(ciclope);
enviarCuartel(ciclope);
