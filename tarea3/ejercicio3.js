class Animal {
    constructor(tipo) {
      this.tipo = tipo;
    }
  
    hablar() {
      if (this.tipo === "perro") {
        console.log("Guau!");
      } else if (this.tipo === "gato") {
        console.log("Miau!");
      } else {
        console.log("No puedo hablar.");
      }
    }
}
  
const perro = new Animal("perro");
const gato = new Animal("gato");
const pajaro = new Animal("pajaro");
  
perro.hablar();
gato.hablar();
pajaro.hablar();