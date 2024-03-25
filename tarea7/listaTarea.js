class ListaTareas {
    constructor(){
        this.tareas = []
    }

    agregarTarea(tarea){
        this.tareas.push(tarea)
    }

    eliminarTarea(indice){
        this.tareas.splice(indice, 1)
    }
    
    marcarTareaCompletada(indice){
        this.tareas[indice].marcarCompletada()
    }

    mostrarTareas(){
        console.log('Lista de tareas:')
        this.tareas.forEach( (tarea, indice) =>{
            console.log(`${indice}. ${tarea.obtenerDescripcion()}`)
        })
    }
}

export default ListaTareas