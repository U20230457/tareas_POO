class Calculadora {
    constructor() {}
  
    operacion(operador, num1, num2) {
      switch (operador) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          return num1 / num2;
        default:
          return "Operador no válido";
      }
    }
}
  
const calculadora = new Calculadora();

const resultado = calculadora.operacion("+", 10, 5);

console.log(`El resultado de la operación es: ${resultado}`);