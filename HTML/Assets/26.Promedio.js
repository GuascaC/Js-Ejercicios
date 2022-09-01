'use strict';
let num1=0;
let num2=0;
let num3=0;
let promr = 0;
num1=prompt("Introduzca la primera Nota:");
num2=prompt("Introduzca la Segunda Nota:");
num3=prompt("Introduzca la Tercera Nota:");
function prom(num1, num2, num3) {
    return (parseFloat(num1)*0.4) + (parseFloat(num2)*0.2) + (parseFloat(num3)*0.4)}
promr = prom(num1, num2, num3);
alert(`Las notas son:${num1},${num2},${num3}`);
alert("El promedio es:"+promr,".");