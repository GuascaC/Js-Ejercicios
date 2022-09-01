'use strict';
let pib = 0;
let habits = 0;
let pibPerr = 0;
pib = prompt("Ingrese el Producto Interno Bruto: ");
habits = prompt("Ingrese Cantidad de Habitantes: ");
function pibPer(pib,habits) {
    return pib/habits}
pibPerr = pibPer(pib,habits);
alert("Pib Per Capita: "+pibPerr);
