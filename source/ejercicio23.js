// Función para manejar el cambio de selección  
function manejarCambio(event) {  
    const resultado = document.getElementById('resultado');  
    const valorSeleccionado = event.target.value;  

    resultado.textContent = valorSeleccionado; // Actualiza el contenido en la página  
    console.log(`Seleccionaste: ${valorSeleccionado}`); // Muestra en la consola  
}  

//Agrega el evento a los botones de opción  
document.querySelectorAll('input[name="lenguaje"]').forEach((radio) => {  
    radio.addEventListener('change', manejarCambio);  
});  