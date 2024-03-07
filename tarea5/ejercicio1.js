class Musica {
    constructor(artista,cancion) {
        this.artista = artista
        this.cancion = cancion
    }

    reproducir(){
        console.log(`Se esta reproduciendo la cancion ${this.cancion} de ${this.artista}`);
    }
}

class Electronica extends Musica{
    
    reproducir(){
        console.log(`Se esta reproduciendo la cancion ${this.cancion} de ${this.artista}`);
    }
}

class Pop extends Musica {

    reproducir(){
        console.log(`Se esta reproduciendo la cancion ${this.cancion} de ${this.artista}`);
    }
}

let musica1 = new Musica('Morat','Paris')
let electronica1 = new Electronica('Marshmello','Happier')
let pop1 = new Pop('The Weekend','Save your tears')

musica1.reproducir()
electronica1.reproducir()
pop1.reproducir()