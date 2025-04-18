// Mostrar en una página html un párrafo de texto y un botón, aplicar estilos css. Crear un script que capture el evento clic del botón y que cambie el texto del párrafo por otro.

const parrafo = document.getElementById("miParrafo");

const boton = document.getElementById("cambiarTexto");

function cambiarTextoDelParrafo(){
    parrafo.textContent = "El texto fue modificado!";
}

boton.addEventListener("click", cambiarTextoDelParrafo)