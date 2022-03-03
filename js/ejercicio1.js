let nombre;
let categoria;
let precio;
let subtotal, total;


alert("Ejercicio 4- Descuentos según la categoria")

 nombre= prompt('Ingrese su nombre');
 categoria= Number(prompt('Ingrese el numero de  su categoria'));
 precio= Number(prompt('Ingrese el precio del producto'));



switch(categoria){

    case 1: 

        descuento = (precio*10)/100;
        document.getElementById('categoria').innerHTML="Su categoria es tipo A ";
        document.getElementById('descuento').innerHTML="Su descuento es del 10%";
        total = precio - descuento;
    break;

    case 2: 

         descuento = (precio*15)/100;
        document.getElementById('categoria').innerHTML="Su categoria es tipo B";
        document.getElementById('descuento').innerHTML="Su descuento es del 15%";
        total = precio - descuento;
    break;

    case 3: 

     descuento = (precio*20)/100;
      document.getElementById('categoria').innerHTML="Su categoria es tipo C ";
     document.getElementById('descuento').innerHTML="Su descuento es del 20%";
     total = precio - descuento;
    break;

        default:

        document.getElementById('error').innerHTML='No ha ingresado una categoria valida';

}



document.getElementById('nombre').innerHTML='Cliente: ' + nombre;
document.getElementById('descuentos').innerHTML="El descuento es equivalente a: " + descuento + " $";
document.getElementById('total').innerHTML="El total a pagar es: " + total + " $";