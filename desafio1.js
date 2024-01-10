alert("Bienvenida y Bienvenido a nuestro sitio web!");

let nombre = "luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = "Error! Completa todos los campos";

alert(mensajeDeError);

nombre = prompt("porfavor Ingresa tu nombre");
edad = parseInt(prompt("Porfavor ingresa tu edad"));

if (edad >= 18) {
    alert("Puedes obtener tu licencia de conducir")
}