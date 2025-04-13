// .Declarar una función con nombre calcularMayor() y pasarle comoparámetros (numero1,numero2). Dentro de la función mostrar un alert que diga cuál de losnúmeros ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de un alert también. Invocar la función y enviar los argumentos con diferentes números para probar

const calcularMayor = (numero1, numero2) => {
    if (numero1 > numero2) {
        alert("El número mayor entre " + numero1 + " y " + numero2 + " es: " + numero1);
    } else if (numero1 < numero2) {
        alert("El número mayor entre " + numero1 + " y " + numero2 + " es: " + numero2);
    } else {
        alert("Los números: " + numero1 + " y " + numero2 + " son iguales");
    }
}

calcularMayor(2, 4);
