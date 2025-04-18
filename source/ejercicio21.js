/* 21. Construir una página utilizando Html, Css y JavaScript que permita al usuario escribir en un campo de texto (<input>), y que a medida que escribe, el texto se muestre automáticamente en otro elemento de la página (por ejemplo, un <p>). 
Usar un elemento <input type="text"> para que el usuario pueda escribir.
Mostrar el texto ingresado en un elemento Html como un <p> o un <div>.
Aplicar estilos básicos con Css para que la interfaz sea clara y prolija.
Usar JavaScript para capturar el evento input y actualizar el contenido dinámicamente. */

const input = document.getElementById("miInput");
const parrafo = document.getElementById("miParrafo");

function actualizarTexto(){
    parrafo.textContent = input.value;
}

input.addEventListener("input", actualizarTexto);