class Coche {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    imprimirInformacion() {
      console.log(`Marca: ${this.marca}`);
      console.log(`Modelo: ${this.modelo}`);
    }
}
  
const coches = [
  new Coche("Toyota", "Yaris"),
  new Coche("Renault", "Clio"),
  new Coche("Ford", "Fiesta"),
];

for (const coche of coches) {
  coche.imprimirInformacion();
  console.log("------");
}