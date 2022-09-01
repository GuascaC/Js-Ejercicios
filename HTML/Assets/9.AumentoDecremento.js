'use strict';
let val = 0;
let porcent = 0;
let aumento = 0;
let decremento = 0;
let result1 = 0;
let result2 = 0;
let result3 = 0;
val=prompt("Ingrese el valor(COP)");
porcent = (val)* 0.15
function mas(val,porcent) {
    return porcent + parseFloat(val)}
function menos(val,porcent) {
    return (val) - porcent }
result1 =  mas(val,porcent);
result2 =  menos(val,porcent);
alert("Valor Porcentaje:"+porcent);
alert("Aumento:"+result1);
alert("Decremento:"+result2);
console.log("Valor Porcentaje:"+result1);