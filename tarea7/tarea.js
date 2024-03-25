class Tarea {
    constructor(descripcion){
        this.descripcion = descripcion
        this.completada = false
    }

    marcarCompletada(){
	    this.completada = true
    }

    obtenerDescripcion(){
        return `${this.descripcion} (${this.completada ? 'completada' : 'pendiente'})`
    }
}

export default Tarea