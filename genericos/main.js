// Varibal;e generica tipo t es decir una funcion que recibe cualquier tipo de dato 
function identity(arg) {
    return arg;
}
var output = identity("Hola");
var output2 = identity(12);
console.log(output);
console.log(output2);
var par = {
    primero: 1,
    segundo: 'dos'
};
