var Persona = /** @class */ (function () {
    //se debe crear siempre el constructor si no genera errores 
    function Persona(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    Persona.prototype.saludar = function () {
        return "Hola mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " anios");
    };
    return Persona;
}());
var persona = new Persona("Jorge", 12, true);
console.log(persona.saludar());
