

let cadena = prompt("Ingrese cadena de texto: ");
let caracter = prompt("Ingrese caracter a buscar: ");

let contador = 0;
for (let i = 0; i < cadena.length; i++){
    if (cadena[i] === caracter){
        contador++;
    }
}
if (contador > 0){
    alert("El caracter '" + caracter + "' se encuentra " + contador + " veces en la cadena");
} else {
    alert("El caracter '" + caracter + "' NO se encuentra en la cadena");
}
