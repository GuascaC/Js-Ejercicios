'Use strict'
let num1 = 0;
let num2 = 0;
let denom1 = 0;
let denom2 = 0;
num1 = prompt("Ingrese el Primer Numeraador: ");
denom1 = prompt("Ingrese el Primer Denominador: ");
num2 = prompt("Ingrese el segundo Numerador: ");
denom2 = prompt("Ingrese el Segundo Denominador: ");
if (num1 % denom1 == num2 % denom2){
    alert("Son Equivalentes")}
else {alert("No son Equivalentes")}