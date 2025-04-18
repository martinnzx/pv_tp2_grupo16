// Obtener elementos del DOM  
const btnMostrar = document.getElementById('btnMostrar');  

// Función para mostrar los datos  
function mostrarDatos() {  
    // Obtener valores de los campos de entrada  
    const nombre = document.querySelector('#nombre').value;  
    const apellido = document.querySelector('#apellido').value;  
    const libreta = document.querySelector('#libreta').value;  

    // Crear la cadena para mostrar en la alerta  
    const mensaje = `Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`;  

    // Mostrar los datos  
    alert(mensaje);  
}  

// Agregar evento al botón  
btnMostrar.addEventListener('click', mostrarDatos);  