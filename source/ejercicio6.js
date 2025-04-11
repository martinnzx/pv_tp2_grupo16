// Crear un array denominado 'edades' con al menos 8 edades distintas  
let edades = [22, 25, 30, 18, 27, 21, 29, 24];  

// Función para calcular el promedio de las edades  
const calcularPromedioEdades = (edadesArray) => {  
    let suma = 0;  

    // Recorrer el array y sumar las edades  
    for (let i = 0; i < edadesArray.length; i++) {  
        suma += edadesArray[i];  
    }  

    // Calcular el promedio  
    let promedio = suma / edadesArray.length;  
    return promedio;  
};  

// Llamar a la función y guardar el promedio  
let promedioEdades = calcularPromedioEdades(edades);  
console.log("El promedio de las edades es: " + promedioEdades);  