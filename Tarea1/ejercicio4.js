class Promedio{
    constructor(nombre,apellido, nota){
        this._nombre = nombre
        this._apellido = apellido
        this._nota = nota
    }

    mostrarPromedio(){
        return `El promedio del alumno ${this._nombre} ${this._apellido} en el ciclo es ${this._nota}`
    }
}

const promedio1 = new Promedio('Francisco','Gomez',6.2)
alert(promedio1.mostrarPromedio())