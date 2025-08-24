interface Persona{
    nombre:string,
    edad:number,
    esDesarrollador:boolean
}

let persona : Persona = {
    nombre:"Pedro",
    edad:22,
    esDesarrollador:true
}

console.log("Persona: ",persona);


let personas:Persona[] =[
    {nombre:"Juan",edad:22,esDesarrollador:true},
    {nombre:"Jacinto",edad:53,esDesarrollador:false},
    {nombre:"Rosario",edad:60,esDesarrollador:true}
 ]
 console.log("Personas: ",personas)

 interface Sumar{
    (a:number,b:number):number
 }
 let sumar:Sumar = (a:number,b:number):number => {
    return a+b
 }

 console.log("Resultadop de sumar: ", sumar(5,3));
 