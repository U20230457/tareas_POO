let calcularButton = document.getElementById('calcular')

class IMC{
    constructor(nombre, masa, altura){
        this._nombre = nombre
        this._masa = masa
        this._altura = altura
    }

    calcularIMC(){
        let imc = this._masa / (this._altura * this._altura)
        return imc
    }
}



calcularButton.addEventListener("click",() =>{
    let nombreInput = document.getElementById('nombre').value
    let masaInput = parseFloat(document.getElementById('masa').value)
    let alturaInput = parseFloat(document.getElementById('altura').value)

    const usuario1 = new IMC(nombreInput,masaInput,alturaInput)
    let resultado = usuario1.calcularIMC().toFixed(2)

    alert(`${usuario1._nombre} tu IMC es de ${resultado}`)
})