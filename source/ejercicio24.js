
/*Este formato se usa para exportar varias funciones del js*/
/*import { cambiarColor } from "./ejercicio24CambiarColor.js";*/
/*Este formato (sin llaves {} en nombre de funcion )se usa cuando hay una sola funcion a compartir en el js*/
import cambiarColor from "./ejercicio24CambiarColor.js";

const boton = document.getElementById('ModColor'); 

boton.addEventListener('click', cambiarColor); 
