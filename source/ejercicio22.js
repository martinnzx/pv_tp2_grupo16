// A medida que el usuario escribe, el contenido debe mostrarse en otro elemento de la página (como un <p> o un <div>). Además, cuando el texto supere los 20 caracteres, el fondo del elemento donde se muestra el texto debe cambiar de color automáticamente. Usar un <input type="text"> para que el usuario pueda escribir. Mostrar el texto ingresado en tiempo real dentro de un <p> o <div>. Aplicar estilos básicos con CSS. Utilizar JavaScript para manejar el evento input.

let entrada = document.getElementById("entrada");
let salida = document.getElementById("salida");

entrada.addEventListener("input", () => {
    let texto = entrada.value;
    salida.textContent = texto;
    
    if ( texto.length > 20 ) {
        salida.style.backgroundColor = "salmon";
        //alert("El texto es mayor a 20 caracteres");
    } else {
        salida.style.backgroundColor = "";
    }
})

