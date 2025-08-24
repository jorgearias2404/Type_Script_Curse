// con el signo de interrogacion definimos que el parasmentro saludo es opcional
function saludar(nombre:string,saludo ?:string):string{ 
    if(saludo){
        return `${saludo}, ${nombre}`
    } else {
        return `Hola , ${nombre}`
    }
}

console.log(saludar("Javier","Buenos dias"))
console.log(saludar("Javier"))

// PARAMETROS MULTIPLES
// puedes con los tres puntos definir que vasd a recibir n cantidad de parametors
// que se van a almacenar en este caso en un arreglo de tipo numerico
// .reduce extrae todos los valores del arreglo
function sumartodos(...numeros:number[]):number{
    return numeros.reduce((acumulado,actual) =>acumulado + actual,0)
}
console.log("El resulto es: ",sumartodos(1,2,3,4,5,6,7,8,9,0));

// VALORES POR DFEFECTO
// Si no se pasa nada en el parametro despedida por defecto imprime "Adios"
function despedir(nombre:string,despedida :string = "Adios"):string{ 
    if(despedida){
        return `${despedida}, ${nombre}`
    } else {
        return `${despedida}, ${nombre}`
    }
}

console.log(despedir("Javier","Buenos dias"))
console.log(despedir("Javier"))
