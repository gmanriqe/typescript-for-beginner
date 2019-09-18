/* VAR será cambiado por LET */
// declarar la variable junto a su tipo de dato
var nombre = "Jesus";
var numero = 123;
var boleano = true;
var hoy = new Date();
hoy = new Date('2020-10-22');
// :any quiere decir que puede recibir: string, numero, boleano, Date(); 
var cualquiera;
var spiderman = {
    nmbre: "Peter",
    edad: 30,
    poder: "trepar paredes"
};
console.log(hoy);
// Plantillas literales
var nombre1 = "Juan";
var apellido1 = "Torres";
var texto = "Hola" + nombre;
var oracion = "Hola, " + nombre1 + " " + apellido1;
console.log(oracion);
