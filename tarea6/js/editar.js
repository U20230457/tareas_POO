const urlParams = new URLSearchParams(window.location.search);
const nombre = urlParams.get('nombre');
const fechaNacimiento = urlParams.get('fecha_nacimiento');
const genero = urlParams.get('genero');
const departamento = urlParams.get('departamento');
const ciudad = urlParams.get('ciudad');
const numeroTelefono = urlParams.get('numero_telefono');
const descripcion = urlParams.get('descripcion');

document.getElementById('nombre').value = nombre;
document.getElementById('fecha_nacimiento').value = fechaNacimiento;
document.getElementById('genero').value = genero;
document.getElementById('departamento').value = departamento;
document.getElementById('ciudad').value = ciudad;
document.getElementById('telefono').value = numeroTelefono;
document.getElementById('descripcion').value = descripcion;

const btn_guardar = document.getElementById('btn-guardar-cambios')

btn_guardar.addEventListener('click', () =>{
    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    const genero = document.getElementById('genero').value;
    const departamento = document.getElementById('departamento').value;
    const ciudad = document.getElementById('ciudad').value;
    const numeroTelefono = document.getElementById('telefono').value;
    const descripcion = document.getElementById('descripcion').value;

    const perfilActualizado = {
        nombre,
        fechaNacimiento,
        genero,
        departamento,
        ciudad,
        numeroTelefono,
        descripcion,
    }

    const perfilActualizadoJSON = JSON.stringify(perfilActualizado);
    localStorage.setItem('perfil', perfilActualizadoJSON);

    window.location.href = 'perfil.html'
})
