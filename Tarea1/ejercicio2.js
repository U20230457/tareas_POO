class pokemon{
    constructor(nombre){
        this._nombre = nombre
    }

    invocarPokemon(){
        return `${this._nombre} yo te elijo`
    }
}

const pokemon1 = new pokemon('Bulbasaur')
const pokemon2 = new pokemon('Eevee')
const pokemon3 = new pokemon('Ditto')
const pokemon4 = new pokemon('Gengar')
const pokemon5 = new pokemon('Charmander')
const pokemon6 = new pokemon('Pikachu')


alert(pokemon1.invocarPokemon());