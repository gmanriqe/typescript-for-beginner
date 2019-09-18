/* VAR será cambiado por LET */

// declarar la variable junto a su tipo de dato
let nombre:string = "Jesus";
let numero:number = 123;
let boleano:boolean = true;

let hoy:Date = new Date();

hoy = new Date('2020-10-22');

// :any quiere decir que puede recibir: string, numero, boleano, Date(); 
let cualquiera:any;

let spiderman = {
    nmbre: "Peter",
    edad: 30,
    poder: "trepar paredes"
}

console.log(hoy);

/* Plantillas literales */
let nombre1:string = "Juan";
let apellido1:string = "Torres";
let texto = "Hola" + nombre;

let oracion = `Hola, ${nombre1} ${apellido1}` 
console.log(oracion);