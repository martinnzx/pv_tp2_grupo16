


/*Este formato se usa para exportar varias funciones del js origen*/
/*export function cambiarColor(){*/
/*Este formato (con default )se usa cuando hay una sola funcion a compartir en el js origen*/
export default function cambiarColor(){
        const Aleatorio = '#' + Math.floor(Math.random()*16777215).toString(16); 
     document.body.style.backgroundColor = Aleatorio; 
     console.log(`Color modifcado a: ${Aleatorio}`); 
} 

