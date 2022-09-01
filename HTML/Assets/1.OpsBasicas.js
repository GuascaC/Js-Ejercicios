'use strict';
let num1 = 0;
let num2 = 0;
num1=prompt("Introduzca un número");
num2=prompt("Introduzca otro número");
function suma(num1,num2){
    return parseFloat(num1) + parseFloat(num2);
}
function resta(num1,num2){
    return num1 - num2;
}
function mult(num1,num2){
    return num1 * num2;
}
function div(num1,num2){
    return num1 / num2;
}
let result1 = 0;
result1 = suma(num1,num2);
let result2 = 0;
result2 = resta(num1,num2);
let result3 = 0;
result3 = mult(num1,num2);
let result4 = 0;
result4 = div(num1,num2);
console.log("El resultado de la suma es:"+result1);
alert("El resultado de la suma es:"+result1);
console.log("El resultado de la resta es:"+result2);
alert("El resultado de la resta es:"+result2);
console.log("El resultado de la multiplicación es:"+result3);
alert("El resultado de la multiplicación es:"+result3);
console.log("El resultado de la división es:"+result4);
alert("El resultado de la división es:"+result4);