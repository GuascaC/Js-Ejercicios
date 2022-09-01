'use strict';
let cant = 0;
let appl = 0;
let total = 0;
cant=prompt("Ingrese la Cantidad de Manzanas: ");
appl=prompt("Ingrese El precio de Manzanas: ");
total = parseFloat(cant)*parseFloat(appl);
if (total<=3000){
    alert("Dentro de Presupuesto: "+total);
}
else{
    alert("Fuera de Presupuesto: "+total);
}
