// Clase Basica

// Definicion de la clase
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    // Metodos para imprimir informacion en consola
    imprimirInfo(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);

    }
}

// Creacion de un objeto
const persona1 = new Persona('Manuel', 19);
persona1.imprimirInfo();