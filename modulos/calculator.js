"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suma = suma;
exports.resta = resta;
exports.multiplicacion = multiplicacion;
exports.divisiion = divisiion;
function suma(numero1, numero2) {
    return numero1 + numero2;
}
function resta(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}
function divisiion(numero1, numero2) {
    if (numero2 !== 0) {
        return numero1 / numero2;
    }
    else {
        return 0;
    }
}
