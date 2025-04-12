/* 7. Declarar un array denominado nombres con al menos 6 nombres. 
Obtener el nombre más largo del array nombres.
Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length)
que indica su tamaño. */

// Asignacion de variables
let nombres = ["Martin", "Valentin", "Tiziano", "Cesar", "Matias", "Tomas"];
let nombreMasLargo = "";

// Recorre el array de nombres para encontrar el nombre mas largo
for (let i = 0; i < nombres.length; i++){
    if (nombres[i].length > nombreMasLargo.length){
        nombreMasLargo = nombres[i];
    }
}

// Mostrar resultado por consola
console.log("El nombre mas largo es: " + nombreMasLargo);