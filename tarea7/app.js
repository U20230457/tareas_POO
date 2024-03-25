import Tarea from './tarea.js';
import ListaTareas from './listaTarea.js';

const miListaTareas = new ListaTareas();

const tarea1 = new Tarea('Comprar pan')
const tarea2 = new Tarea('Lavar el coche');
const tarea3 = new Tarea('Estudiar para el examen');

miListaTareas.agregarTarea(tarea1);
miListaTareas.agregarTarea(tarea2);
miListaTareas.agregarTarea(tarea3);

miListaTareas.mostrarTareas();

miListaTareas.marcarTareaCompletada(0);
miListaTareas.mostrarTareas();

miListaTareas.eliminarTarea(1);
miListaTareas.mostrarTareas();