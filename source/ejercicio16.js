//Escribir una función llamada sumarRango que reciba dos argumentos numéricosenteros: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos). El número inicial debe ser menor o igual que el número final.

let numIni = parseInt(prompt("Ingrese el numero inicial: "));
let numFi = parseInt(prompt("Ingrese ahora el numero final: "));

const sumarRango = (numIni, numFi) =>{
    if ( numIni <= numFi ) {
        let total = 0;
        for (let i = numIni; i <= numFi; i++) {
            total = total + i 
        }
        console.log("La suma de los numeros es: " + total);
    } else {
        console.log("El numero final no puede ser menor que el numero inicial.");
    }
}

sumarRango(numIni, numFi);