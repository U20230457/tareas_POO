class Usuario{
    constructor(usuario, pass, bdusuario, bdpwd){
        this.usuario=usuario
        this.pass= pass
        this.bdusuario=bdusuario
        this.bdpwd=bdpwd
    }
}

class Sesion extends Usuario{
    constructor(usuario, pass, bdusuario, bdpwd){
        super(usuario, pass, bdusuario, bdpwd)
    }

    validar (){
        alertify.set('notifier','position', 'top-right');   
        if(this.usuario== this.bdusuario && this.pass == this.bdpwd){
            // alert('Inicio de sesión exitoso,')
            alertify.success('Inicio de sesión exitoso');
            window.location.href = 'registro.html';
        }else {
          //  alert('Las credenciales no son correctas.')
            if (this.usuario != this.bdusuario && this.pass != this.bdpwd){
                alertify.error('El usuario y la contraseña son incorrectos');
            }else if (this.usuario != this.bdusuario){
                alertify.error('El usuario es incorrecto');
            }else if (this.pass != this.bdpwd){
                alertify.error('La contraseña es incorrecta')
            }
        }
    }
}

class Perfil extends Sesion{
    constructor(usuario, pass, bdusuario, bdpwd, nombre, fecha_nacimiento, genero, departamento, ciudad, numero_telefono, descripcion){
        super(usuario, pass, bdusuario, bdpwd)
        this.nombre = nombre
        this.fecha_nacimiento = fecha_nacimiento
        this.genero = genero
        this.departamento = departamento
        this.ciudad = ciudad
        this.numero_telefono = numero_telefono
        this.descripcion = descripcion
    }

    set NOMBRE(nuevo_nombre){
        this.nombre = nuevo_nombre
    }

    get NOMBRE(){
        return this.nombre
    }

    set FECHA_NACIMIENTO(nueva_fecha){
        this.fecha_nacimiento = nueva_fecha
    }

    get FECHA_NACIMIENTO(){
        return this.fecha_nacimiento
    }

    set GENERO(nuevo_genero){
        this.genero = nuevo_genero
    }

    get GENERO(){
        return this.genero
    }

    set DEPARTAMENTO(nuevo_departamento){
        this.departamento = nuevo_departamento
    }

    get DEPARTAMENTO(){
        return this.departamento
    }

    set CIUDAD(nueva_ciudad){
        this.ciudad = nueva_ciudad
    }

    get CIUDAD(){
        return this.ciudad
    }

    set TELEFONO(nuevo_telefono){
        this.numero_telefono = nuevo_telefono
    }

    get TELEFONO(){
        return this.numero_telefono
    }

    set DESCRIPCION(nueva_descripcion){
        this.descripcion = nueva_descripcion
    }

    get DESCRIPCION(){
        return this.descripcion
    }

}


function login (){
    let user = document.getElementById('username').value
    let pwd = document.getElementById('password').value

    Consulta = new Sesion(user,pwd,'Erick','694')
    Consulta.validar()

}


const btn_enviar_datos = document.getElementById('btn-enviar-datos')



btn_enviar_datos.addEventListener('click',() => {
    const input_nombre = document.getElementById("nombre").value;
    const input_fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    const input_genero = document.getElementById("genero").value;
    const input_departamento = document.getElementById("departamento").value;
    const input_ciudad = document.getElementById("ciudad").value;
    const input_telefono = document.getElementById("telefono").value;
    const input_descripcion = document.getElementById("descripcion").value;
    
    let nuevo_Perfil = new Perfil()
    nuevo_Perfil.NOMBRE = input_nombre
    nuevo_Perfil.FECHA_NACIMIENTO = input_fecha_nacimiento
    nuevo_Perfil.GENERO = input_genero
    nuevo_Perfil.DEPARTAMENTO = input_departamento
    nuevo_Perfil.CIUDAD = input_ciudad
    nuevo_Perfil.TELEFONO = input_telefono
    nuevo_Perfil.DESCRIPCION = input_descripcion
    
    const perfilJSON = JSON.stringify(nuevo_Perfil)
    localStorage.setItem('perfil',perfilJSON)
    
    window.location.href = 'perfil.html'
})

/*

function informacion(){
    const input_nombre = document.getElementById("nombre").value;
    const input_fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    const input_genero = document.getElementById("genero").value;
    const input_departamento = document.getElementById("departamento").value;
    const input_ciudad = document.getElementById("ciudad").value;
    const input_telefono = document.getElementById("telefono").value;
    const input_descripcion = document.getElementById("descripcion").value;

    var url = `perfil.html?nombre =${encodeURIComponent(input_nombre)}&fecha=${input_fecha_nacimiento}&genero=${input_genero}`
    window.location.href
}
*/