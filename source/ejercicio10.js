// Función para calcular el promedio de tres números  
const calcularPromedioTresNumeros = (num1, num2, num3) => {  
    return (num1 + num2 + num3) / 3;  
};  

// Solicitar al usuario que ingrese tres números enteros  
const num1 = parseInt(prompt("Ingrese el primer número entero:"));  
const num2 = parseInt(prompt("Ingrese el segundo número entero:"));  
const num3 = parseInt(prompt("Ingrese el tercer número entero:"));  

// Calcular el promedio  
const promedio = calcularPromedioTresNumeros(num1, num2, num3);  

// Mostrar el resultado  
alert("El promedio de los tres números es: " + promedio);  