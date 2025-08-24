// con el signo de interrogacion definimos que el parasmentro saludo es opcional
function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre);
    }
    else {
        return "Hola , ".concat(nombre);
    }
}
console.log(saludar("Javier", "Buenos dias"));
console.log(saludar("Javier"));
// PARAMETROS MULTIPLES
// puedes con los tres puntos definir que vasd a recibir n cantidad de parametors
// que se van a almacenar en este caso en un arreglo de tipo numerico
// .reduce extrae todos los valores del arreglo
function sumartodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
}
console.log("El resulto es: ", sumartodos(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
// VALORES POR DFEFECTO
// Si no se pasa nada en el parametro despedida por defecto imprime "Adios"
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adios"; }
    if (despedida) {
        return "".concat(despedida, ", ").concat(nombre);
    }
    else {
        return "".concat(despedida, ", ").concat(nombre);
    }
}
console.log(despedir("Javier", "Buenos dias"));
console.log(despedir("Javier"));
