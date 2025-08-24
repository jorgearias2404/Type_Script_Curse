var nombres = ["Jorge", "Pepito", "Manguito"];
console.log("Nombres: ", nombres);
var edades = [23, 23, 43];
console.log("Edades: ", edades);
var mixto = ["algo", 12, true];
console.log("Mixtos: ", mixto);
var personas = [
    { nombre: "Juan", edad: 22, esDesarrollador: true },
    { nombre: "Jacinto", edad: 53, esDesarrollador: false },
    { nombre: "Rosario", edad: 60, esDesarrollador: true }
];
console.log("Personas: ", personas);
personas.push({ nombre: "Miranda", edad: 31, esDesarrollador: false });
console.log("Personas: ", personas);
//  TUPLAS  
var personasTupla;
personasTupla = ["Jorge", 21, true];
console.log("Persona tupla: ", personasTupla);
// ENUMERADORES
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["lunes"] = 0] = "lunes";
    DiaDeLaSemana[DiaDeLaSemana["martes"] = 1] = "martes";
    DiaDeLaSemana[DiaDeLaSemana["miercoles"] = 2] = "miercoles";
    DiaDeLaSemana[DiaDeLaSemana["jueves"] = 3] = "jueves";
    DiaDeLaSemana[DiaDeLaSemana["viernes"] = 4] = "viernes";
    DiaDeLaSemana[DiaDeLaSemana["sabado"] = 5] = "sabado";
    DiaDeLaSemana[DiaDeLaSemana["domingo"] = 6] = "domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.lunes;
console.log("Dia: ", dia);
console.log("Dia: ", DiaDeLaSemana[dia]);
