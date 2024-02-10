class Persona {
    constructor(nombre,dui,telefono){
        this._nombre = nombre
        this._dui = dui
        this._telefono = telefono
    }

    mostrarDatos(){
        return ` ${this._nombre} ${this._dui} ${this._telefono}`
    }
}

class Trabajo {
    constructor(empresa, puesto, salario){
        this._empresa = empresa
        this._puesto = puesto
        this._salario = salario
    }

    mostrarDatos(){
        return ` ${this._empresa} ${this._puesto} ${this._salario}`
    }
}

function imprimirDatos() {
    const nombreFormulario = document.getElementById('nombre').value
    const duiFormulario = document.getElementById('dui').value
    const telefonoFormulario = document.getElementById('telefono').value
    const empresaFormulario = document.getElementById('empresa').value
    const puestoFormulario = document.getElementById('puesto').value
    const salarioFormulario = document.getElementById('salario').value

    const persona1= new Persona(nombreFormulario,duiFormulario,telefonoFormulario)
    const trabajo1 = new Trabajo(empresaFormulario,puestoFormulario,salarioFormulario)

    document.getElementById('tablaInformacion').innerHTML = `
    <table>
        <tr>
            <th>Nombre</th>
            <th>Dui</th>
            <th>Telefono</th>
            <th>Empresa</th>
            <th>Puesto</th>
            <th>Salario</th>
        </tr>
        <tr>
            <td>${persona1._nombre}</td>
            <td>${persona1._dui}</td>
            <td>${persona1._telefono}</td>
            <td>${trabajo1._empresa}</td>
            <td>${trabajo1._puesto}</td>
            <td>$${trabajo1._salario}</td>
        </tr>
    </table>
    `
}