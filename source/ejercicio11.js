/* 11. Solicitar al usuario que ingrese el número de kilómetros recorridos por su vehículo y el
número de litros de combustible consumidos. Calcular y mostrar el consumo de combustible por kilómetro.
El resultado se obtiene dividiendo número de litros dividido por número de kilómetros. */

// Solicitar al usuario para que ingrese los kilometros recorridos y litros de combustibles consumidos
let kilometros = prompt("Ingrese el numero de kilometros recorridos por su vehiculo:");
let litros = prompt("Ingrese el numero de litros de combustile consumidos");

// Calculo del consumo dividiendo los litros por los kilómetros
let consumo = parseFloat(litros) / parseFloat(kilometros);

// Mostrar al usuario el resultado del consumo en litros por kilómetro
alert("El consumo de combustile por kilometro es de: " + consumo + " L/km");