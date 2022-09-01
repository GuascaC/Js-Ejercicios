'use strict';
let num = 0;
let par = 0;
let impar = 0;
num = prompt("Ingrese la cantidad de números a sumar: ");
for(let i=0;i<=num;i++){
    if (i % 2 ==0){
        par++;
    }
    else {
        impar++;
    }
 }
alert("Pares : "+par);
alert("Impares : "+impar);