// Herencia de clases
class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido(){
        console.log(`${this.nombre} hace un sonido`);
    }
}

class Perro extends Animal{
    hacerSonido(){
        console.log(`${this.nombre} ladra.`)
    }
}

// Creacion de un objeto
const perro1 = new Perro('Tyson');
perro1.hacerSonido(); //Imprime: Tyson ladra