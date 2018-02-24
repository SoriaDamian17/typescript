"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creamos nuestra clase Avenger y la exportamos
var Avenger = /** @class */ (function () {
    function Avenger(nombre) {
        //Agregamos nuestras propiedades
        this.nombre = 'antman';
        this.equipo = '';
        this.nombreReal = '';
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        console.log(nombre);
    }
    return Avenger;
}());
exports.Avenger = Avenger;
