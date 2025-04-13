// . Solicitar al usuario que ingrese un número. Comparar si es par o no, usando un if/else determinar si es par que muestre un alert indicando que el número es par o sino mostrar un alert indicando que es impar.

let num1 = parseInt(prompt("Ingresa un numero y verificaremos si es par o impar:"));
let div = 0;

div = num1 % 2; 

if ( div == 0 ) {
    alert("El numero: " + num1 + " es un numero par");
} else {
    alert("El numero: " + num1 + " es un numero impar");
}
