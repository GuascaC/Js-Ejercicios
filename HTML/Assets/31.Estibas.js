'use strict';
let base = 0;
let altur = 0;
let cant = 0;
let CantEst = 0;
let totalr = 0;
base = prompt("Ingrese Base: ");
altur = prompt("Ingrese Altura: ");
cant = prompt("Ingrese Cantidad de Estibas: ");
CantEst = base * altur;
function total(cantEstr,cant){
    return cant * cantEstr}
totalr = total(CantEst,cant)
alert("Cantidad por Estiba: "+CantEst);
alert("Total: "+totalr);