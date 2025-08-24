interface Direction{
    calle:string,
    numero:number,
    ciudad?:string
}
let direction:Direction = {
    calle:"Calle falsa",
    numero:12345,
    ciudad:"Infierno"
}

console.log("Esta es mi direccion: ",direction);


// READ ONLY
interface Persona{
   readonly nombre:string,
   readonly edad:number,
   readonly esDesarrollador:boolean
}

let personaRead : Persona = {
    nombre:"Pedro",
    edad:22,
    esDesarrollador:true
}
console.log("Persona: ",personaRead)
// personaRead.nombre = "Marce"  sale error por que es una propiedad de solo lectura

// AQUI HEREDA LAS PROIEDADES DE PERSONA
interface Empleado extends Persona{
       readonly puesto:string
}

let EmpleadoRaed:Empleado = {
    nombre:"Jorge",
    edad:50,
    esDesarrollador:true,
    puesto:"Desarrollador Senior"
}

console.log("Empleado: ",EmpleadoRaed);
