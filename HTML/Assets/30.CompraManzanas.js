'use strict';
let cant = 0;
let appl = 0;
let totalr = 0;
cant=prompt("Ingrese la Cantidad de Manzanas: ");
appl=prompt("Ingrese El precio de Manzanas: ");
function total(cant,appl) {
    return cant * appl}
totalr = total(cant,appl);
alert("Total:"+totalr);