'use strict'
let num = 0;
let cuadr = 0; 
let cubo = 0;
num=prompt("Introduzca un número");
function pow(num){
    return Math.pow(num,2); 
}

function pow3(num){
    return Math.pow(num,3); 
}

let result = 0;
result = pow(num);
let result1 = 0;
result1 = pow3(num);

alert("El cuadrado es:"+result);
alert("El Cubo es:"+result1);