'use strict';
let num = 0;
let pos = 0;
let neg = 0;
num = prompt("Ingrese la cantidad de números a sumar: ");
for(let i=0;i<=num;i++){
    if (i>0){
        pos++;
    }
    else if (i<0) {
        neg++
    }
 }
alert("Positivo : "+pos);
alert("Negativo : "+neg);