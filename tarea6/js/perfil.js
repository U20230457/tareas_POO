const perfilJSON = localStorage.getItem('perfil')
const perfil = JSON.parse(perfilJSON)

console.log(perfil);

let informacion = document.getElementById('informacion-perfil')

informacion.innerHTML = `
    <h1>${perfil.nombre}</h1>
    <p>Fecha de nacimiento: ${perfil.fecha_nacimiento} </p>
    <p>Género: ${perfil.genero}</p>
    <p>Departamento: ${perfil.departamento}</p>
    <p>Ciudad: ${perfil.ciudad}</p>
    <p>Número de teléfono: ${perfil.numero_telefono}</p>
    <p>Descripción: ${perfil.descripcion}</p>
`

const btn_editar_informacion = document.getElementById('editar-informacion');

btn_editar_informacion.addEventListener('click', () => {
    const perfilJSON = localStorage.getItem('perfil');
    const perfil = JSON.parse(perfilJSON);
    const url = `editar.html?nombre=${perfil.nombre}&fecha_nacimiento=${perfil.fecha_nacimiento}&genero=${perfil.genero}&departamento=${perfil.departamento}&ciudad=${perfil.ciudad}&numero_telefono=${perfil.numero_telefono}&descripcion=${perfil.descripcion}`;
    window.location.href = url;
});
