class Canino{
    constructor(nombre,edad,velocidad){
        this._nombre = nombre
        this._edad = edad
        this._velocidad = velocidad
    }

    imprimirDatos(){
        return `El canino llamado ${this._nombre} tiene una edad de ${this._edad} años, velocidad en competencia de ${this._velocidad} km/h`
    }
}

const canino1 = new Canino('Firulais', 3, 20)
alert(canino1.imprimirDatos())