class Calculadora {
    constructor() {
        
    }
  
    sumar(a, b) {
      return a + b;
    }
  
    pedirNumero(mensaje) {
      let numero;
      do {
        numero = prompt(mensaje);
      } while (isNaN(numero));
      return parseInt(numero);
    }
}
  
const calculadora = new Calculadora();
  
const num1 = calculadora.pedirNumero("Introduce el primer número: ");
const num2 = calculadora.pedirNumero("Introduce el segundo número: ");
  
const resultado = calculadora.sumar(num1, num2);
  
console.log(`La suma de ${num1} y ${num2} es ${resultado}.`);