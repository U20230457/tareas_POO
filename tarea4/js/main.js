class Menu {
    constructor(id,nombre,precio,categoria){
        this._id = id
        this._nombre = nombre
        this._precio = precio
        this._categoria = categoria
    }

    get Nombre(){
        return this._nombre
    }

    get Precio(){
        return this._precio
    }
}

const hamburguesa = new Menu(1, 'Hamburguesa con papas', 6.99, 'comida')
const tacos = new Menu(2, 'Tacos de birria', 4.99, 'comida')
const nachos = new Menu(3, 'Nachos', 3.50, 'comida')
const cocaCola = new Menu(4, 'Coca-Cola', 1, 'bebida')
const tropical = new Menu(5, 'Tropical', 0.80, 'bebida')
const fanta = new Menu(6, 'Fanta', 0.8, 'bebida')
const sprite = new Menu(7, 'Sprite', 0.75, 'bebida')
const fuzeTea = new Menu(8, 'Fuze Tea', 0.85, 'bebida')



class Pedido {
    constructor(id, cliente){
        this._id = id
        this._cliente = cliente
        this._items = []
        this._total = 0
        this._estado = 'en cocina'
    }

    agregarItem(comida){
        if (comida){
            this._comida.push(comida)
        }
    }

    calcularTotal(){
        let precioTotal = 0
        this._comida.forEach((comida, e)=>{
            precioTotal += comida + this._bebida[e]
        })

        this._total = precioTotal
    }

    get Total(){
        return this._total
    }

    cambiarEstado(){
        this._estado = 'listo'
    }
}

