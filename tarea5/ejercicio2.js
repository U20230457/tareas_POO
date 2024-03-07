class Mascota {
    constructor(nombre,tipo){
        this.nombre = nombre
        this.tipo = tipo
    }

    presentarMascota(){
        console.log(`Mi mascota es un ${this.tipo} y se llama ${this.nombre}`);
    }
}

class Perro extends Mascota {
    constructor(nombre,tipo,edad){
        super(nombre,tipo)
        this.edad = edad
    }

    presentarMascota(){
        console.log(`Mi mascota es un ${this.tipo}, se llama ${this.nombre} y tiene ${this.edad} años`);
    }
}

class Gato extends Mascota {
    constructor(nombre,tipo,edad){
        super(nombre,tipo)
        this.edad = edad
    }

    presentarMascota(){
        console.log(`Mi mascota es un ${this.tipo}, se llama ${this.nombre} y tiene ${this.edad} años`);
    }
}

let mascota1 = new Perro('Capitan','perro',7)
let mascota2 = new Gato('Polar','Gato',3)

mascota1.presentarMascota()
mascota2.presentarMascota()