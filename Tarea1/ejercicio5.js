class Persona {
    constructor(nombre, edad){
        this._nombre = nombre
        this._edad = edad
    }

    despertarme(){
        return `Yo ${this._nombre} de ${this._edad} años, me levnato a las 6 de la mañana`
    }

    cocinar(){
        return `Yo ${this._nombre} de ${this._edad} años, cocino en el almuerzo`
    }

    dormir(){
        return `Yo ${this._nombre} de ${this._edad} años, me duermo a la 1 de la noche`
    }
}

const persona1 = new Persona('Erick',21)
alert(persona1.despertarme());
alert(persona1.cocinar());
alert(persona1.dormir());