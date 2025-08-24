var nombre = "Admin";
console.log(nombre.length);
function obtenerLongitud(obj) {
    var longitud = obj.length;
    var tipo = typeof obj;
    console.log("Longituf: ", longitud, " Tipo de dato: ", tipo);
    return obj.length;
}
console.log(obtenerLongitud("Hola"));
console.log(obtenerLongitud([1, 2, 3, 4, 5, 6, 7]));
