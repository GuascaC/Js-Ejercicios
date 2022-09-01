'use strict';
let num = 0;
let result = 0;
num = prompt("Ingrese la cantidad de números a sumar: ");
for(let i=0;i<num;i++){
    result = parseFloat(result) + parseFloat(i) }
alert("El resultado es : "+result);