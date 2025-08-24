let nombre:string = "Admin"
console.log(nombre.length); 

function obtenerLongitud<T extends {length:number}>(obj:T):number{
    let longitud:number = obj.length
    let tipo :string = typeof obj
    console.log("Longituf: ",longitud," Tipo de dato: ",tipo);
    
    return obj.length
}

console.log(obtenerLongitud("Hola")); 
console.log(obtenerLongitud([1,2,3,4,5,6,7])); 
//No funciona para argumento de tipo numerico
// console.log(obtenerLongitud(32));
