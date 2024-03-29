// Función para sumar dos números
function sumar(num1, num2) {
    return num1 + num2;
}

// Función para restar dos números
function restar(num1, num2) {
    return num1 - num2
}

//Función para multiplicar dos números
function multiplicar(num1, num2) {
    return num1 * num2
}
  
//Función para dividir dos números
function dividir (num1, num2) {
    return num1 / num2
}

//Función para sacar la factorial de un número
function factorial (num) {
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i
    }
    return res
}

//Función para calcular el exponente entre dos números
function exponente(num1, num2) {
    return num1 ** num2
}

//Función para sacar la raiz cuadrada
function raizCuadrada(num) {
    return Math.sqrt(num)
}

// Función principal del programa
function calculadora() {
    var opcion = prompt(
        "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada"
    );
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2, resultado;

    if (opcion !== "5" && opcion !== "7" && opcion !== "6") {
        num2 = parseFloat(prompt("Ingrese el segundo número:"));
    } 

    switch (opcion) {
      case "1":
        resultado = sumar(num1, num2);
        break;
      case "2":
        resultado = restar(num1, num2);
        break;
      case "3":
        resultado = multiplicar(num1, num2);
        break;
      case "4":
        resultado = dividir(num1, num2);
        break;
      case "5":
        resultado = factorial(num1);
        break;
      case "6":
        var exponenteNum = parseFloat(prompt("Ingrese el exponente:"));
        resultado = exponente(num1, exponenteNum);
        break;
      case "7":
        resultado = raizCuadrada(num1);
        break;
      default:
        resultado = "Opción no válida";
        break;
    }
  
    alert("El resultado es: " + resultado);
}
  
// Llamar a la función principal
calculadora();