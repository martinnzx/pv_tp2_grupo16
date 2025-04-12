/* 11. Solicitar al usuario que ingrese el número de kilómetros recorridos por su vehículo y el
número de litros de combustible consumidos. Calcular y mostrar el consumo de combustible por kilómetro.
El resultado se obtiene dividiendo número de litros dividido por número de kilómetros. */

let kilometros = prompt("Ingrese el numero de kilometros recorridos por su vehiculo:");
let litros = prompt("Ingrese el numero de litros de combustile consumidos");

let consumo = parseFloat(litros) / parseFloat(kilometros);

alert("El consumo de combustile por kilometro es de: " + consumo + " L/km");