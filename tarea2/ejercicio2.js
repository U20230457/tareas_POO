class Usuario {
    constructor(nombre, nCuenta, saldo, montoDeposito){
        this._nombre = nombre
        this._nCuenta = nCuenta
        this._saldo = saldo
        this._montoDeposito = montoDeposito
    }

    deposito(){
        if (montoDeposito < 0){
            alert('La cantidad ingresada no es valida\nPor favor intente de nuevo')
            montoDeposito = parseFloat(prompt('Ingrese el monto a ingresar a la cuenta'))
        }

        let total = saldo + montoDeposito
        return total
    }
}

nombre = prompt('Ingrese su nombre de usuario')
nCuenta = parseInt(prompt('Ingrese su número de cuenta'))
saldo = 35.45
montoDeposito = parseFloat(prompt('Ingrese el monto a ingresar a la cuenta'))

const usuario1 = new Usuario(nombre, nCuenta, saldo, montoDeposito)

document.getElementById('nombre').innerHTML = usuario1._nombre
document.getElementById('nCuenta').innerHTML = usuario1._nCuenta
document.getElementById('saldo').innerHTML = usuario1.deposito()