class Bebida{
    constructor(sabor,precio){
        this._sabor = sabor;
        this._precio = precio;
    }

    imprimir(){
        return `Sabor: ${this._sabor} \nPrecio: $${this._precio}`
    }
}

const bebida1 = new Bebida('Coca-Cola',1)
const bebida2 = new Bebida('Pepsi',1)
const bebida3 = new Bebida('Uva',0.75)
const bebida4 = new Bebida('Fanta', 0.75)
const bebida5 = new Bebida('7Up',0.75)

alert(bebida1.imprimir())