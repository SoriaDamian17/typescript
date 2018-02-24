//Creamos nuestra clase Avenger y la exportamos
export class Avenger {
    //Agregamos nuestras propiedades
    nombre:string = 'antman';
    equipo:string = '';
    nombreReal:string = '';

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string){
        this.nombre =  nombre;
        console.log(nombre);
    }
}
