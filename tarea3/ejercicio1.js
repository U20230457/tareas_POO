class Persona {
    constructor(nombre) {
      this.nombre = nombre;
      this.edad = 0;
    }
  
    crecer() {
      this.edad++;
      console.log(`**${this.nombre}** ahora tiene **${this.edad}** años.`);
    }
  
    esMayorDeEdad() {
      return this.edad >= 18;
    }
}
  
const persona = new Persona("Juan");
  
while (!persona.esMayorDeEdad()) {
    persona.crecer();
}
  
console.log(`**${persona.nombre}** es mayor de edad.`);