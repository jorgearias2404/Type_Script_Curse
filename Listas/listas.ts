let nombres:string[] = ["Jorge","Pepito","Manguito"]
console.log("Nombres: ",nombres);

let edades:number[] = [23,23,43]
console.log("Edades: ",edades)

let mixto:any[] = ["algo",12,true]
console.log("Mixtos: ",mixto);

interface Persona{
    nombre:string,
    edad:number,
    esDesarrollador:boolean
}

let personas:Persona[] =[
    {nombre:"Juan",edad:22,esDesarrollador:true},
    {nombre:"Jacinto",edad:53,esDesarrollador:false},
    {nombre:"Rosario",edad:60,esDesarrollador:true}
 ]
 console.log("Personas: ",personas)

 personas.push({nombre:"Miranda",edad:31,esDesarrollador:false})

 console.log("Personas: ",personas)

//  TUPLAS  
let personasTupla : [string,number,boolean]
personasTupla = ["Jorge",21,true] 
console.log("Persona tupla: ",personasTupla);

// ENUMERADORES
enum DiaDeLaSemana {
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo
}

let dia:DiaDeLaSemana = DiaDeLaSemana.lunes
console.log("Dia: ",dia);
console.log("Dia: ",DiaDeLaSemana[dia]);

