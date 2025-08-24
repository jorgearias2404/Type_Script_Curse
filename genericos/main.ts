
// Varibal;e generica tipo t es decir una funcion que recibe cualquier tipo de dato 
function identity<T>(arg:T):T{
    return arg
}

let output = identity<string>("Hola")
let output2 = identity<number>(12)

console.log(output);
console.log(output2);

interface Par<T, U>{
  primero: T;
  segundo: U;
}

const par: Par<number, string> = {
  primero: 1,
  segundo: 'dos'
}