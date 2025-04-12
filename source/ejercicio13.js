
let arreglo = [15, 28, 25, 9];
mostrarArreglo(arreglo);
//mostrarArreglo2(arreglo);     *** tambien funciona ***



function mostrarArreglo(arreglo){
    console.log("Contenido del arreglo recibido como parámetro:");
    for(let i = 0; i < arreglo.length ; i++){
        console.log("Elemento " + i + ": " + arreglo[i]);
        alert("Elemento " + i + ": " + arreglo[i]);
    }
}

/*
function mostrarArreglo2(arreglo){
    console.log("Contenido del arreglo con while:");
    let i = 0;
    while(i < arreglo.length){
        console.log("Elemento " + i + ": " + arreglo[i]);
        alert("Elemento " + i + ": " + arreglo[i]);
        i++;
    }    
}
*/
