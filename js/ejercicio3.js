let numNotas;
let nota;
let cont;
let suma;
let promedio;

alert('Ejercicio 3 - Promedio de n notas mientras n != 0');

numNotas = Number(prompt('Ingrese el numero de notas que desee promediar'));

promedio = Number;

cont=0;
suma=0;
    while (cont < numNotas) {

        cont = cont+1;

        nota= Number(prompt('Ingrese la nota' + cont + ' de' + numNotas)) ;

        suma = suma + nota;

    }


promedio = suma/numNotas;

document.getElementById('notas').innerHTML='Su promedio es: ' + promedio;

