class Promedio{
    constructor(nombre,nota1,nota2,nota3,nota4){
        this._nombre = nombre
        this._nota1 = nota1
        this._nota2 = nota2
        this._nota3 = nota3
        this._nota4 = nota4
    }

    calcularPromedio(){
        let prom = (this._nota1 + this._nota2 + this._nota3 + this._nota4) / 4
        return prom
    }
}

nombre = prompt('Ingrese el nombre del alumno')
nota1 = parseFloat(prompt('Ingrese la 1° nota'))
nota2 = parseFloat(prompt('Ingrese la 2° nota'))
nota3 = parseFloat(prompt('Ingrese la 3° nota'))
nota4 = parseFloat(prompt('Ingrese la 4° nota'))

const estudiante1 = new Promedio(nombre,nota1,nota2,nota3,nota4)

document.getElementById('nombre').innerHTML = estudiante1._nombre
document.getElementById('promedio').innerHTML = estudiante1.calcularPromedio()