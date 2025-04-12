/* 15. Escribir una función llamada retornar mes, que reciba un número entero y si
corresponde a un mes del año devolver el nombre del mes, si no se cumple entonces
mostrar un mensaje que no es un mes. */

let num = prompt("Ingrese el numero de un mes:");
num = parseInt(num);

const retornarMes = (num) => {
        switch (num) {
            case 1:
                alert("El numero del mes ingresado corresponde a Enero");
                break;
            case 2:
                alert("El numero del mes ingresado corresponde a Febrero");
                break;
            case 3:
                alert("El numero del mes ingresado corresponde a Marzo");
                break;
            case 4:
                alert("El numero del mes ingresado corresponde a Abril");
                break;
            case 5:
                alert("El numero del mes ingresado corresponde a Mayo");
                break;
            case 6:
                alert("El numero del mes ingresado corresponde a Junio");
                break;
            case 7:
                alert("El numero del mes ingresado corresponde a Julio");
                break;
            case 8:
                alert("El numero del mes ingresado corresponde a Agosto");
                break;
            case 9:
                alert("El numero del mes ingresado corresponde a Septiembre");
                break;
            case 10:
                alert("El numero del mes ingresado corresponde a Octubre");
                break;
            case 11:
                alert("El numero del mes ingresado corresponde a Noviembre");
                break;
            case 12:
                alert("El numero del mes ingresado corresponde a Diciembre");
                break;
            default:
                alert("El numero del mes ingresado NO corresponde a ningun mes");
                break;
        }
}
retornarMes(num);

