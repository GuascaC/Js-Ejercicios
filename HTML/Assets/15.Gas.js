'use strict';
let gas = 0;
let lit = 0;
let precioLitr = 0;
let precioGas = 0;
gas=prompt("Ingrese Galones de Gasolina: ");
precioGas = 2509;
lit = gas * 3.785;

function precioLit(lit) {
     return lit * 9500}
precioLitr = precioLit(lit);
alert("Galones: "+gas);
alert("Precio por Galon: "+precioGas);
alert("Litros: "+lit);
alert("Precio a Pagar: "+precioLitr);